import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto, EditBlogDto } from './dto';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async getBlogs(userId: number) {
    return await this.prisma.blog.findMany({
      where: {
        userId,
      },
    });
  }

  async getBlogById(userId: number, blogId: number) {
    return await this.prisma.blog.findFirst({
      where: {
        id: blogId,
        userId,
      },
    });
  }

  async createBlog(userId: number, dto: CreateBlogDto) {
    const blog = await this.prisma.blog.create({
      data: {
        userId,
        ...dto,
      },
    });
    return blog;
  }

  async editBlog(userId: number, blogId: number, dto: EditBlogDto) {
    const blog = await this.prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog || blog.userId !== userId)
      throw new ForbiddenException('Authorization denied!');

    return await this.prisma.blog.update({
      where: {
        id: blogId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBlogById(userId: number, blogId: number) {
    const blog = await this.prisma.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog || blog.userId !== userId)
      throw new ForbiddenException('Authorization denied!');

    await this.prisma.blog.delete({
      where: {
        id: blogId,
      },
    });

    return 'blog deleted';
  }
}
