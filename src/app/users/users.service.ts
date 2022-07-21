import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreUserDto } from './dto/store-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRespository: Repository<UsersEntity>,
    ) {}

    async index() {
        return await this.usersRespository.find();
    }

    async store(data: StoreUserDto) {
        const users = this.usersRespository.create(data);
        return await this.usersRespository.save(users);
    }

    async show(id: string) {
        return await this.usersRespository.findOneOrFail(
            { id },
            { relations: ['userProfiles'] },
        );
    }

    async update(id: string, data) {
        const user = await this.usersRespository.findOneOrFail({ id });

        this.usersRespository.merge(user, data);
        return await this.usersRespository.save(user);
    }

    async patch(id: string, data) {
        const user = await this.usersRespository.findOneOrFail({ id });

        this.usersRespository.merge(user, data);
        return await this.usersRespository.save(user);
    }

    async destroy(id: string) {
        await this.usersRespository.findOneOrFail({ id });
        await this.usersRespository.softDelete({ id });
    }
}
