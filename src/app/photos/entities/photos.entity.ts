import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'photos' })
export class PhotosEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'post_id', type: 'uuid' })
    postId: string;

    @Column({ name: 'photo_url', type: 'text', nullable: false })
    photoUrl: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}
