import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../login/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from '../auth/jwt.contants';
import { JwtStorage } from '../auth/jwt.strategy';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtStorage,
    JwtModule.register({
      secret: jwtContants.secret,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
