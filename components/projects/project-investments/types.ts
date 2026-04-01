export type InvestmentItem = {
  description: string;
  totalAmount: string;
};

export type Investment = {
  title: string;
  totalAmount: string;
  items: InvestmentItem[];
};
