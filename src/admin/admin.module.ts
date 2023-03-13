import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { AdminSchema} from './admin.model';
import { MongooseModule } from "@nestjs/mongoose"


@Module({
  imports: [MongooseModule.forFeature([{name:"admin", schema: AdminSchema}])],
  providers: [AdminService],
  controllers: [AdminController],
  exports: [AdminService]
})
export class AdminModule {}
