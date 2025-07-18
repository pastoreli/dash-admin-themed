import { Flex, Text, Container, Box, Card, Grid } from "@radix-ui/themes";
import { TableCampaign } from "./components/tables";
import { CampaignEntity } from "./domain/campaign/entity";
import { ChartBar, ChartLine } from "./components/charts";

export default function App() {
  return (
    <Container align="center">
      <Flex direction="column" gap="4">
        <Text>Hello from Radix Themes :)</Text>
        <Grid columns="3" gap="4" width="auto">
          <Card>
            <ChartBar
              data={mockActivatedCampaigns}
              XAxisKey="label"
              contentOptions={[{ key: "value", name: "Ativadas" }]}
            />
          </Card>
          <Card>
            <ChartBar
              data={mockActivatedCampaignsByType}
              XAxisKey="label"
              contentOptions={[
                { key: "phone", name: "Celular" },
                { key: "pix", name: "Pix", color: "#BD0014" },
              ]}
            />
          </Card>
          <Card>
            <ChartLine
              data={mockActivatedCampaignsByType}
              XAxisKey="label"
              contentOptions={[
                { key: "phone", name: "Celular" },
                { key: "pix", name: "Pix", color: "#BD0014" },
              ]}
            />
          </Card>
        </Grid>
        <Box width="100%">
          <Card>
            <TableCampaign items={mockCampaigns} />
          </Card>
        </Box>
      </Flex>
    </Container>
  );
}

const mockCampaigns: CampaignEntity[] = [
  {
    id: "1",
    name: "Campanha 1",
    beginDate: "2023-01-01",
    endDate: "2023-01-31",
  },
  {
    id: "2",
    name: "Campanha 2",
    beginDate: "2023-02-01",
    endDate: "2023-02-28",
  },
  {
    id: "3",
    name: "Campanha 3",
    beginDate: "2023-03-01",
    endDate: "2023-03-31",
  },
  {
    id: "4",
    name: "Campanha 4",
    beginDate: "2023-04-01",
    endDate: "2023-04-30",
  },
];

const mockActivatedCampaigns = [
  { label: "Jan", value: 400 },
  { label: "Fev", value: 300 },
  { label: "Mar", value: 500 },
  { label: "Abr", value: 200 },
];

const mockActivatedCampaignsByType = [
  { label: "Jan", phone: 400, pix: 240 },
  { label: "Fev", phone: 300, pix: 139 },
  { label: "Mar", phone: 500, pix: 980 },
  { label: "Abr", phone: 200, pix: 390 },
];
