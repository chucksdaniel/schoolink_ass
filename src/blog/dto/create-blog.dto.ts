import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({ description: 'Blog title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Blog Description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Blog Post' })
  @IsString()
  @IsNotEmpty()
  post: string;

  @ApiProperty({ description: 'Blog Post' })
  @IsString()
  @IsOptional()
  link: string;
}
