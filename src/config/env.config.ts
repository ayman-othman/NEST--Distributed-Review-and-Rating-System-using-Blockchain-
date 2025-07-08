import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  rpcUrl: process.env.RPC_URL,
  privateKey: process.env.PRIVATE_KEY,
  contractAddress: process.env.REVIEW_CONTRACT_ADDRESS,
  chainId: Number(process.env.CHAIN_ID),
};
