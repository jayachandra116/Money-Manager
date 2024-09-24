export type TransactionType = "income" | "expense" | "transfer";

type Other = "";

export type TransactionCategory =
  | "food"
  | "household"
  | "bills"
  | "entertainment"
  | "transportation"
  | "other";

export type FoodSubCategory =
  | "breakfast"
  | "lunch"
  | "snacks"
  | "dinner"
  | "beverages";

export type HouseHoldSubCategory = "rent" | "groceries" | "vegetables";

export type BillsSubCategory =
  | "credit card"
  | "electricity"
  | "tv"
  | "internet"
  | "mobile"
  | "gas";

export type EntertainmentSubCategory = "subscription" | "movies" | "outing";
export type TransportationSubCategory = "bus" | "taxi" | "petrol" | "servicing";

export type TransactionSubCategory =
  | FoodSubCategory
  | HouseHoldSubCategory
  | BillsSubCategory
  | EntertainmentSubCategory
  | Other;

export type TransactionAccount = "cash" | "card" | "transfer";

export interface Transaction {
  id: string;
  type: TransactionType;
  date: string;
  account: TransactionAccount;
  category: TransactionCategory;
  subCategory: TransactionSubCategory;
  amount: number;
  note: string;
}
