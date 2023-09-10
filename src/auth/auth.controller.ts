import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignupDto } from './dto';
import { ApiHeader, ApiOperation } from '@nestjs/swagger';

@ApiHeader({
  name: 'Authorization',
  description: 'Bearer token',
})
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Signup a new user' })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  signup(@Body() dto: SignupDto) {
    console.log({
      dto,
    });
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  login(@Body() dto: AuthDto) {
    console.log({
      dto,
    });
    //Log
    return this.authService.login(dto);
  }
}
