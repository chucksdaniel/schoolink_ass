import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @ApiProperty({ description: 'Username' })
  @IsEmail()
  @IsOptional()
  username: string;

  @ApiProperty({ description: 'User name' })
  @IsString()
  @IsOptional()
  name?: string;
}
