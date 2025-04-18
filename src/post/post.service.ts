import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {

    createPost(payload) {
        return payload;
    }
}
