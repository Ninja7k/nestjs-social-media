import { Controller, Delete, Param, ParseUUIDPipe } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('v1/app/photos')
export class PhotosController {
    constructor(private readonly photoService: PhotosService) {}
    @Delete(':id')
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
        await this.photoService.destroy(id);
    }
}
