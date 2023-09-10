import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class EditBlogDto {
  @ApiProperty({ description: 'Blog title' })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({ description: 'Blog Post' })
  @IsString()
  @IsOptional()
  post: string;

  @ApiProperty({ description: 'Blog Description' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Blog link' })
  @IsString()
  @IsOptional()
  link: string;
}
