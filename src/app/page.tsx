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
          <TabPanel>
            <Expenses />
          </TabPanel>
          <TabPanel>
            <History />
          </TabPanel>
          <TabPanel>
            <Analytics />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
