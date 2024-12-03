'use client';
import CardMenu from '@/components/card/CardMenu';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table';

type RowObj = {
  incidentId: string;
  description: string;
  severity: string;
  status: string;
  location: string;
};
import { HiUserGroup } from 'react-icons/hi2';

const tableDataIncidents: RowObj[] = [
  {
    incidentId: 'INC001',
    description: 'Building fire at Valencia city center',
    severity: 'High',
    status: 'Ongoing',
    location: '39.4699, -0.3763' // Valencia city center
  },
  {
    incidentId: 'INC002',
    description: 'Traffic accident near Valencia port',
    severity: 'Medium',
    status: 'Resolved',
    location: '39.4710, -0.3790' // Near Valencia port
  },
  {
    incidentId: 'INC003',
    description: 'Public disturbance at Plaza de Ayuntamiento',
    severity: 'Low',
    status: 'Ongoing',
    location: '39.4650, -0.3750' // Plaza de Ayuntamiento
  },
  {
    incidentId: 'INC004',
    description: 'Forest fire near a park',
    severity: 'Critical',
    status: 'Ongoing',
    location: '39.4800, -0.3700' // Nearby park
  },
  {
    incidentId: 'INC005',
    description: 'Medical emergency in Valencia’s old town',
    severity: 'High',
    status: 'Resolved',
    location: '39.4720, -0.3740' // Valencia's old town
  },
  {
    incidentId: 'INC006',
    description: 'Roadblock due to flooding near Turia Gardens',
    severity: 'Medium',
    status: 'Pending',
    location: '39.4675, -0.3785' // Along Turia Gardens
  }
];

function InfoCard() {
  return (
    <Card
      className={
        'h-full w-1/2 mt-5 border-zinc-200 p-0 dark:border-zinc-800 sm:overflow-auto text-black'
      }
    >
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-black dark:text-white">
                IncidentID
              </TableHead>
              <TableHead className="font-bold text-black dark:text-white">
                Description
              </TableHead>
              <TableHead className="font-bold text-black dark:text-white">
                Severity
              </TableHead>
              <TableHead className="font-bold text-black dark:text-white">
                Status
              </TableHead>
              <TableHead className="font-bold text-black dark:text-white">
                Location
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataIncidents.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.incidentId}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <span
                    className={`font-bold ${item.severity === 'Critical' ? 'text-red-500 text-bold' : 'text-black dark-text-white'}`}
                  >
                    {item.severity}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`font-bold ${
                      item.status === 'Resolved'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>
                  <a
                    href="/dashboard/main"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {item.location}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="overflow-x-scroll xl:overflow-x-hidden">
        {/* pagination */}
        <div className="mt-2 flex h-20 w-full items-center justify-between px-6">
          {/* left side */}
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Showing 6 rows per page
            </p>
          </div>
          {/* right side */}
          <div className="flex items-center gap-2">
            <Button
              onClick={null}
              disabled={null}
              className={`flex items-center justify-center rounded-md bg-transparent p-2 text-lg text-foreground transition duration-200 hover:bg-transparent active:bg-transparent dark:text-white dark:hover:bg-transparent dark:active:bg-transparent`}
            >
              <MdChevronLeft />
            </Button>

            {/* {createPages(table.getPageCount()).map((pageNumber, index) => {
       return (
        <Button
         className={`font-mediumflex p-0 items-center justify-center rounded-md p-2 text-sm transition duration-200 ${
          pageNumber === pageIndex + 1
           ? ''
           : 'border border-zinc-200 bg-[transparent] dark:border-zinc-800 dark:text-white'
         }`}
         onClick={() => table.setPageIndex(pageNumber - 1)}
         key={index}
        >
         {pageNumber}
        </Button>
       );
      })} */}
            <Button
              onClick={null}
              disabled={null}
              className={`flex min-w-[34px] items-center justify-center rounded-md bg-transparent p-2 text-lg text-foreground transition duration-200 hover:bg-transparent active:bg-transparent dark:text-white dark:hover:bg-transparent dark:active:bg-transparent`}
            >
              <MdChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default InfoCard;
const columnHelper = createColumnHelper<RowObj>();
