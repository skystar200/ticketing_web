import { Injectable, SetMetadata } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { extname } from 'path';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
// @Injectable()
// export class UserService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all user`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // 1. 인스턴스 생성
    const user = this.userRepository.create(createUserDto);

    // 2. 인스턴스 Database에 저장
    return await this.userRepository.save(user); 
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

 
  async findOne(id: number) : Promise<User>{
    return await this.userRepository.findOne( { where: {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) : Promise<User> {
    // 1. 해당 아이디 유저 찾기
    const user = await this.userRepository.findOne({where : {id}});
    if (!user) {
      throw new Error("유저를 찾을 수 없습니다.");
    }
  
    // 2. 기존 user와 새로운 updateUserDto와 병합
    this.userRepository.update(id, updateUserDto);

    // 3. 변경사항 저장
    const updatedUser = await this.userRepository.save(user);
    return updatedUser;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

}

export const TYPEORM_CUSTOM_REPOSITORY = 'TYPEORM_CUSTOM_REPOSITORY';

export function CustomRepository(entity: Function): ClassDecorator{
    return SetMetadata(TYPEORM_CUSTOM_REPOSITORY, entity);
}
