import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdatePwdDto extends PartialType(CreateUserDto) {
    @IsString()
    @MinLength(15)
    newPassword: string;
    
}
