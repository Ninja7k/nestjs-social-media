import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/users/users.module';
import { PostsController } from './app/posts/posts.controller';
import { PostsService } from './app/posts/posts.service';
import { PostsModule } from './app/posts/posts.module';
import { PhotosController } from './app/photos/photos.controller';
import { PhotosModule } from './app/photos/photos.module';

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
            entities: [__dirname + '/**/*.entity{.js,.ts}'],
            synchronize: false,
            migrations: ['db-migrations/*{.ts,.js}'],
            cli: {
                migrationsDir: 'db-migrations',
            },
            logging: true,
        }),
        UsersModule,
        PostsModule,
        PhotosModule,
    ],
    controllers: [AppController, PostsController, PhotosController],
    providers: [AppService],
})
export class AppModule {}
