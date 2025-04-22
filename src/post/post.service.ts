import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PostService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    async create(payload) {
        const {
            userId,
            description
        } = payload;
        return this.post.create({
            data: {
                description: description,
                userId: userId,
            }
        });
    }

    async list() {
        return this.post.findMany();
    }
}
