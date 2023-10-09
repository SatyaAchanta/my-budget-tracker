import { atom } from 'jotai';
import { dummyExpenses } from "@/data/expeneses";
import { iExpenseDetail } from "@/index";

export const expenseAtom = atom([...dummyExpenses])

export const titleAtom = atom("Welcome to Budget Tracker")