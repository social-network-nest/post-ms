import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern({ cmd: 'create_post' })
  create() {
    return 'hola mi amorcito';
  }

  @MessagePattern({ cmd: 'find_all_posts' })
  findAll() {
    return 'como estas mi amorcito';
  }
}
