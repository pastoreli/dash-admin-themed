import { Table as RadixTable } from "@radix-ui/themes";
import { ReactElement } from "react";

export type TableHeader<T> = {
  label: string;
  selector: (item: T) => any;
  customComponent?: (item: T) => ReactElement;
};

export type TableItems = {
  [field: string]: any;
};

export type TableProps<T> = {
  "data-testid"?: string;
  header: TableHeader<T>[];
  items: T[];
  tableAriaLabel: string;
};

const Table = <Values extends TableItems = TableItems>({
  "data-testid": dataTestId,
  header,
  items,
  tableAriaLabel,
}: TableProps<Values>) => {
  return (
    <RadixTable.Root data-testid={dataTestId} aria-label={tableAriaLabel}>
      <RadixTable.Header>
        <RadixTable.Row>
          {header.map((column) => (
            <RadixTable.ColumnHeaderCell>
              {column.label}
            </RadixTable.ColumnHeaderCell>
          ))}
        </RadixTable.Row>
      </RadixTable.Header>

      <RadixTable.Body>
        {items.map((item, index) => (
          <RadixTable.Row key={index}>
            {header.map((column) => {
              const value = column.selector(item);
              return column.customComponent ? (
                <RadixTable.Cell>
                  {column.customComponent(item)}
                </RadixTable.Cell>
              ) : (
                <RadixTable.Cell>{value}</RadixTable.Cell>
              );
            })}
          </RadixTable.Row>
        ))}
      </RadixTable.Body>
    </RadixTable.Root>
  );
};

export default Table;
