import { Controller, Post, Get, Param, Body  } from '@nestjs/common';
import { JoinService } from './join.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './entities/join.entity';

@Controller('join')
export class JoinController {

    constructor(private readonly joinService: JoinService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<any> {
        return this.joinService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.joinService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.joinService.findOne(id);
    }
}

