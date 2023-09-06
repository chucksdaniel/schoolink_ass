import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BlogService } from './blog.service';
import { CreateBlogDto, EditBlogDto } from './dto';

@UseGuards(JwtGuard)
@Controller('blogs')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post()
  createblog(@GetUser('id') userId: number, @Body() dto: CreateBlogDto) {
    return this.blogService.createBlog(userId, dto);
  }

  @Get()
  getblogs(@GetUser('id') userId: number) {
    return this.blogService.getBlogs(userId);
  }

  @Get(':id')
  getblogById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) blogId: number,
  ) {
    this.blogService.getBlogById(userId, blogId);
  }

  @Patch(':id')
  editblogById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) blogId: number,
    @Body() dto: EditBlogDto,
  ) {
    return this.blogService.editBlog(userId, blogId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteblogById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) blogId: number,
  ) {
    this.blogService.deleteBlogById(userId, blogId);
  }
}
