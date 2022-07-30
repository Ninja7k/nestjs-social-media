import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
    Query,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PhotosService } from '../photos/photos.service';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { IndexPostDto } from './dto/index-post-.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('app/v1/posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly photosService: PhotosService,
    ) {}

    @Get()
    async index(@Query() query: IndexPostDto) {
        return await this.postsService.index(query);
    }
    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe())
        id: string,
        @Body() body: UpdatePostDto,
    ) {
        return await this.postsService.update(id, body);
    }
    @Delete(':id')
    async destroy(@Param(new ParseUUIDPipe()) id: string) {
        return await this.postsService.destroy(id);
    }

    @Post(':id/photos')
    @UseInterceptors(
        FilesInterceptor('files', 6, { limits: { fileSize: 50000000 } }),
    )
    async storePhoto(
        @Param('id', new ParseUUIDPipe()) id: string,
        @UploadedFiles() files: Express.Multer.File[],
    ) {
        return this.photosService.store(id, files);
    }

    @Get(':id/photos')
    async indexPhoto(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.photosService.index(id);
    }
}
