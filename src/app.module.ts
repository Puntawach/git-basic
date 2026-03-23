import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { ColumnsModule } from './columns/columns.module';

@Module({
  imports: [AuthModule, UserModule, WorkspaceModule, ColumnsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
