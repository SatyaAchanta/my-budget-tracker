import { dummyExpenses } from "@/data/expeneses";
import { ExpensesTable } from "./expenseTable";

export default function History() {
  return <ExpensesTable allExpenses={dummyExpenses} />;
}
