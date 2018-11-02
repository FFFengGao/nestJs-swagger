import { Get, Controller } from '@nestjs/common';
import { DogsService } from '../service/dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly appService: DogsService) { }

  @Get('say')
  root(): string {
    return this.appService.root();
  }
}
