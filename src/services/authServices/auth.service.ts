import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async loginUser(body) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: 'XXXXXXXXXXXXXX',
      },
    });
    return user;
  }
}