import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { ContractService } from '../contract/contract.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, ContractService],
})
export class ReviewModule {}
