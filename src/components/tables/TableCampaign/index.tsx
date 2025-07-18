import { useMemo } from "react";
import { Table } from "../../common";
import { CampaignEntity } from "../../../domain/campaign/entity";
import { TableHeader } from "../../common/Table";
import { formatDateIntl } from "../../../utils/date";

export type TableCampaignProps = {
  items: CampaignEntity[];
};

const TableCampaign: React.FC<TableCampaignProps> = ({ items }) => {
  const tableHeader: TableHeader<CampaignEntity>[] = useMemo(
    () => [
      {
        label: "Nome",
        selector: (row) => row.name,
      },
      {
        label: "Início",
        selector: (row) => formatDateIntl(new Date(row.beginDate)),
      },
      {
        label: "Fim",
        selector: (row) => formatDateIntl(new Date(row.endDate)),
      },
    ],
    []
  );

  return (
    <Table
      tableAriaLabel="Tabela de campanhas"
      header={tableHeader}
      items={items}
    />
  );
};

export default TableCampaign;
