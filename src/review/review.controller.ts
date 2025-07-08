import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() body: { productId: string; comment: string; rating: number }) {
    return this.reviewService.createReview(body);
  }

  @Get()
  findAll() {
    return this.reviewService.getAllReviews();
  }
}
