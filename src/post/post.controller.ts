import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  @MessagePattern({ cmd: 'list' })
  list() {
    return this.postService.list();
  }

  @MessagePattern({ cmd: 'create' })
  create(
    @Payload() payload: any,
  ) {
    return this.postService.create(payload);
  }

  @MessagePattern({ cmd: 'update' })
  update(
    @Payload() payload: any,
  ) {
    return this.postService.update(payload);
  }

  @MessagePattern({ cmd: 'delete' })
  delete(
    @Payload() payload: any,
  ) {
    return this.postService.delete(payload);
  }
}
