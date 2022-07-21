import {
    ClassSerializerInterceptor,
    Get,
    UseInterceptors,
} from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { PatchUserDto } from './dto/patch-user.dto';
import { StoreUserDto } from './dto/store-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async index() {
        return this.usersService.index();
    }
    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async store(@Body() body: StoreUserDto) {
        return this.usersService.store(body);
    }

    @Get(':id')
    async show(@Param('id') id: string) {
        return this.usersService.show(id);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() body: UpdateUserDto,
    ) {
        return this.usersService.update(id, body);
    }

    @Patch(':id')
    async patch(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() body: PatchUserDto,
    ) {
        return this.usersService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id') id: string) {
        return this.usersService.destroy(id);
    }
}
