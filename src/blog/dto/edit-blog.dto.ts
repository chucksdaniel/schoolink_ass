import { IsOptional, IsString } from 'class-validator';

export class EditBlogDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  post: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  link: string;
}
