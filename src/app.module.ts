import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: process.env.TYPEORM_CONNECTION as any,
            host: process.env.TYPEORM_HOST,
            port: Number(process.env.TYPEORM_PORT),
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            database: process.env.TYPEORM_DATABASE,
            entities: [__dirname + '/**/*.entity{.js, .ts}'],
            synchronize: true,
            migrations: ['db-migrations/*{.ts,.js}'],
            cli: {
                migrationsDir: 'db-migrations',
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}