import {
  Body,
  Controller,
  Get,
  Patch,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private service: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log({ user });
    return user;
  }

  @Patch()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    console.log(userId);
    return this.service.editUser(userId, dto);
  }
}
