import {
  Box,
  Typography,
  Container,
  Card,
  Grid,
  useTheme,
} from "@mui/material";
import { TableCampaign } from "./components/tables";
import { CampaignEntity } from "./domain/campaign/entity";
import { ChartBar, ChartLine } from "./components/charts";

export default function App() {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.background.default} minHeight="100vh">
      <Container sx={{ p: "2.4rem" }}>
        <Box display="flex" flexDirection="column" gap="2.4rem">
          <Typography>Hello from Mui Themes :)</Typography>
          <Grid container spacing="1.6rem">
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <ChartBar
                  data={mockActivatedCampaigns}
                  XAxisKey="label"
                  contentOptions={[{ key: "value", name: "Ativadas" }]}
                />
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
          </Grid>
          <Box width="100%">
            <Card>
              <TableCampaign items={mockCampaigns} />
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
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
