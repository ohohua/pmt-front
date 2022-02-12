import { Module } from '@nestjs/common';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { Community } from './community.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtStorage } from 'src/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from 'src/auth/jwt.contants';
import { User } from 'src/login/login.entity';
import { SubComment } from './subComment.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Community, User, SubComment]),
    PassportModule,
    JwtStorage,
    JwtModule.register({
      secret: jwtContants.secret,
    }),
  ],
  controllers: [CommunityController],
  providers: [CommunityService],
})
export class CommunityModule {}
