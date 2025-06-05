import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const company = await this.prisma.company.findUnique({
      where: { id: createProductDto.companyId },
    });
    if (!company) {
      throw new NotFoundException(
        `Company with ID "${createProductDto.companyId}" not found.`,
      );
    }
    return this.prisma.product.create({ data: createProductDto });
  }

  async findAll() {
    return this.prisma.product.findMany({ include: { company: true } });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { company: true },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    if (updateProductDto.companyId) {
      const company = await this.prisma.company.findUnique({
        where: { id: updateProductDto.companyId },
      });
      if (!company) {
        throw new NotFoundException(
          `Company with ID "${updateProductDto.companyId}" not found.`,
        );
      }
    }
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    await this.prisma.product.delete({ where: { id } });
    return { message: `Product with ID "${id}" successfully deleted` };
  }
}