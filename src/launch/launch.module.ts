import { Module, HttpModule } from '@nestjs/common';
import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';

@Module({
    imports: [HttpModule],
    providers: [LaunchService, LaunchResolver],
})
export class LaunchModule {}
