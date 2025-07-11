import { Injectable } from '@nestjs/common';
import { ContractService } from '../contract/contract.service';

@Injectable()
export class ReviewService {
  constructor(private readonly contractService: ContractService) {}

  async createReview(dto: { productId: string; comment: string; rating: number }) {
    return this.contractService.addReview(dto.productId, dto.comment, dto.rating);
  }

async getAllReviews() {
  const count = await this.contractService.getReviewCount();
  const reviews = [];

  for (let i = 0; i < count; i++) {
    const review = await this.contractService.getReview(i);

    const normalizedReview = {
      productId: review[0],
      comment: review[1],
      rating: review[2].toString(),
    };

    reviews.push(normalizedReview);
  }

  return reviews;
}

}
