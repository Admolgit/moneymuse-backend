import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller()
export class AuthController {
  constructor(private readonly prisma: PrismaService) {}
  async login(@Body() body) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: 'XXXXXXXXXXXXXX',
      },
    });
    return user;
  }
}