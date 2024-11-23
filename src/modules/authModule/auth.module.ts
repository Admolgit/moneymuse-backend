import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/authControllers/auth.controller';
import { AuthService } from 'src/services/authServices/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}