import { IsEmail, IsNumber, IsString } from "class-validator";

export class JoinCreateUserDto {
  @IsString()
  userId: string;

  @IsString()
  userName: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsNumber()
  phone: number;
}