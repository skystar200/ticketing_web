import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JoinController } from './join.controller';
import { JoinService } from './join.service';
import { User } from './entities/join.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [JoinController],
  providers: [JoinService],
  exports: [JoinService]
  
})
export class JoinModule {}
