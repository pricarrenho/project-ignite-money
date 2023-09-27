import { ReactNode } from "react";

export type Transaction = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

export type TransactionContextType = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
};

export type TransactionsProviderProps = {
  children: ReactNode;
};

export type CreateTransactionInput = {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
};
