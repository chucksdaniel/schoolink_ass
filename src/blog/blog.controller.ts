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
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiHeader({
  name: 'Authorization',
  description: 'Bearer token',
})
@UseGuards(JwtGuard)
@Controller('blogs')
@ApiTags('Blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post()
  @ApiOperation({ summary: 'Create blog' })
  createBlog(@GetUser('id') userId: number, @Body() dto: CreateBlogDto) {
    return this.blogService.createBlog(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Fetch all blogs' })
  getblogs(@GetUser('id') userId: number) {
    return this.blogService.getBlogs(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetch a particular blog' })
  getblogById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) blogId: number,
  ) {
    this.blogService.getBlogById(userId, blogId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit a blog own by a user' })
  editblogById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) blogId: number,
    @Body() dto: EditBlogDto,
  ) {
    return this.blogService.editBlog(userId, blogId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog own by a user' })
  deleteblogById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) blogId: number,
  ) {
    this.blogService.deleteBlogById(userId, blogId);
  }
}
