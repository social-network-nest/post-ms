import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from 'src/user/user.service';

@Controller()
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {}

  @MessagePattern({ cmd: 'create' })
  create(@Payload() payload: any) {
    return this.postService.create(payload);
  }

  @MessagePattern({ cmd: 'list' })
  list() {
    return this.postService.list();
  }
}
