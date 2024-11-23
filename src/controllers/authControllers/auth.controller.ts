import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/services/authServices/auth.service';
import { AuthDTO } from 'src/services/authServices/dto/authDTO';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register-user')
  @ApiOperation({ summary: 'Register a new user.', description: 'Creates a new user in the system.' })
  @ApiBody({
    description: 'User registration.',
    type: AuthDTO, // Swagger will use AuthDTO to describe the body
  })
  async register(@Body() body) {
    return this.authService.registerUser(body)
  }
}