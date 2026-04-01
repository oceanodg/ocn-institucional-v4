import { H3, P } from "~/components/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import type {
  Investment,
  InvestmentItem,
} from "~/components/projects/project-investments/types";

interface ProjectInvestmentProps {
  investment: Investment;
}

export function ProjectInvestment(props: ProjectInvestmentProps) {
  const { investment } = props;
  const { title, totalAmount, items } = investment;

  return (
    <div className="w-full">
      <H3 className="text-left">{title}</H3>
      <P className="text-left mt-0 font-medium">Total: {totalAmount}</P>

      <div className="mt-6">
        <Table containerClassName="rounded-xs border">
          <TableHeader className="">
            <TableRow className="">
              <TableHead className="text-left">Descrição</TableHead>
              <TableHead className="border-l text-right w-[140px]">
                Valor
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item: InvestmentItem) => (
              <TableRow key={item.description}>
                <TableCell className="text-left text-muted-foreground break-words whitespace-normal">
                  {item.description}
                </TableCell>
                <TableCell className="border-l text-right">
                  {item.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-zinc-50">
            <TableRow>
              <TableCell colSpan={1} className="text-left">
                Total
              </TableCell>
              <TableCell className="border-l text-right">
                {totalAmount}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
