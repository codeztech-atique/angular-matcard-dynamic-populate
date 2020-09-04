import { Transaction } from './transaction';

export interface BlockData {
  blockHash: string
  blockNumber: number
  previousBlock: string
  transactions: Transaction[];
}