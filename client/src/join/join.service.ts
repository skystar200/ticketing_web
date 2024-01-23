import { Injectable,  ForbiddenException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './entities/join.entity';
import * as bcrypt from 'bcrypt';
import { bcryptConstant } from 'constants/bcrypt.constants';
@Injectable()
export class JoinService {
    constructor(
        @InjectRepository(User)
        private joinRepository: Repository<User>,
      ) {}
    
      async create(JoinCreateUserDto): Promise<any> {
        const isExist = await this.joinRepository.findOne({ where: { userId: JoinCreateUserDto.userId } });
      
        if (isExist) {
          throw new ForbiddenException({
            statusCode: HttpStatus.FORBIDDEN,
            message: [`이미 등록된 사용자입니다.`],
            error: 'Forbidden'
          });
        }
        JoinCreateUserDto.password = await bcrypt.hash(JoinCreateUserDto.password, bcryptConstant.saltOrRounds);
        const { password, ...result } = await this.joinRepository.save(JoinCreateUserDto);
        return result;
      }

    
      async findAll(): Promise<User[]> {
        return this.joinRepository.find({
          select: ["seq", "userId", "userName", "email", "phone"],
        });
      }
    
      // findOne(id: string): Promise<User> {
      //   const options: FindOneOptions<User> = {
      //     select: ["seq", "userId", "userName", "role"],
      //   };
      //   // const options: FindOneOptions<User> = {};

    
      //   return this.joinRepository.findOne({userId: id}, options);
      // }
      findOne(id: string): Promise<User> {
        const options: FindOneOptions<User> = {
          where: { userId: id },
        };
      
        return this.joinRepository.findOne(options);
      }

}
