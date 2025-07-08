import { Injectable, OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
import abi from './review-contract.abi.json';
import { env } from '../config/env.config';

@Injectable()
export class ContractService implements OnModuleInit {
  private contract: ethers.Contract;

  onModuleInit() {
    const provider = new ethers.JsonRpcProvider(env.rpcUrl);
    const wallet = new ethers.Wallet(env.privateKey!, provider);
    this.contract = new ethers.Contract(env.contractAddress!, abi, wallet);
  }

  async addReview(productId: string, comment: string, rating: number) {
    return this.contract.addReview(productId, comment, rating);
  }

  async getReviewCount(): Promise<number> {
    return this.contract.getReviewCount();
  }

  async getReview(index: number): Promise<any> {
    return this.contract.getReview(index);
  }
}
