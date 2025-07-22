import {
  TableContainer,
  Table as BaseTable,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
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
    <TableContainer data-testid={dataTestId} aria-label={tableAriaLabel}>
      <BaseTable
        size="medium"
        sx={{ minWidth: 650 }}
        aria-label={tableAriaLabel}
      >
        <TableHead>
          <TableRow>
            {header.map((column) => (
              <TableCell>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              {header.map((column) => {
                const value = column.selector(item);
                return column.customComponent ? (
                  <TableCell>{column.customComponent(item)}</TableCell>
                ) : (
                  <TableCell>{value}</TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </BaseTable>
    </TableContainer>
  );
};

export default Table;
