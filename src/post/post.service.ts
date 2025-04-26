import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PostService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    list() {
        return this.post.findMany({
            select: {
                id: true,
                description: true,
                published: true,
            },
        });
    }

    find(id) {
        return this.post.findUnique({
            where: { id },
            select: {
                id: true,
                description: true,
                published: true,
            },
        });
    }

    async create(payload) {
        const {userId, description} = payload;
        const post = await this.post.create({
            data: {
                description: description,
                userId: userId,
            }
        });
        return {
            id: post.id,
            message: 'Post created successfully',
        }
    }

    async update(payload) {
        const {postId: id, description} = payload;
        await this.post.update({
            where: { id },
            data: {
                description: description,
            }
        });
        return {
            id: id,
            message: 'Post updated successfully',
        }
    }

    async delete(id) {
        await this.post.delete({
            where: { id },
        });
        return {
            id: id,
            message: 'Post deleted successfully',
        }
    }
}
