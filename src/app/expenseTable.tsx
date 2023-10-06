import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { iExpenseDetail } from "..";

export const ExpensesTable = ({
  allExpenses,
}: {
  allExpenses: iExpenseDetail[];
}) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>All the purchases you made</TableCaption>
          <Thead>
            <Tr>
              <Th>Purchase Date</Th>
              <Th>Name</Th>
              <Th>Place</Th>
              <Th isNumeric>Total</Th>
              <Th>Category</Th>
              <Th>Comments</Th>
              <Th>Source</Th>
              <Th>Card Holder</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allExpenses.map((expense) => {
              return (
                <>
                  <Tr>
                    <Td>{expense.dateOfPurchase.toLocaleDateString()}</Td>
                    <Td>{expense.name}</Td>
                    <Td>{expense.place}</Td>
                    <Td isNumeric>{expense.total}</Td>
                    <Td>{expense.category}</Td>
                    <Td>{expense.comments}</Td>
                    <Td>{expense.source}</Td>
                    <Td>{expense.cardHolder}</Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
