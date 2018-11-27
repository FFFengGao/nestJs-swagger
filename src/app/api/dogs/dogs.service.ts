import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  root(): string {
    return 'I love dogs';
  }
}
