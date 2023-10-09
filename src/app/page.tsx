import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import Analytics from "./analytics";
import Expenses from "./expenses";
import History from "./history";

export default function App() {
  return (
    <>
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Add Expense</Tab>
          <Tab>All Expenses</Tab>
          <Tab>Analyze Expenses</Tab>
        </TabList>

        <TabPanels>
          <TabPanel key={"expenses"}>
            <Expenses />
          </TabPanel>
          <TabPanel key={"history"}>
            <History />
          </TabPanel>
          <TabPanel key={"analytics"}>
            <Analytics />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
