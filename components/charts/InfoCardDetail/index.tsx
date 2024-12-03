'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type RowObj = {
  resource?: string;
  type: string;
  status: string;
  teamSize?: number;
  parentResource?: string;
  location: string;
};

const data: RowObj[] = [
  {
    resource: 'Fire Engine 1',
    type: 'Fire Appliance',
    status: 'Available',
    teamSize: 4,
    parentResource: 'Fire Station 1',
    location: '39.4699, -0.3763' // Valencia city center
  }
];

function InfoCardDetailComponent() {
  return (
    <Card className="w-1/2 p-4 border-zinc-200 text-zinc-950 dark:border-zinc-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Resource Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-y-4 text-sm text-start"
          >
            <div className="font-medium text-zinc-600 dark:text-zinc-400">
              Resource:
            </div>
            <div>{item.resource || 'N/A'}</div>

            <div className="font-medium text-zinc-600 dark:text-zinc-400">
              Type:
            </div>
            <div>{item.type}</div>

            <div className="font-medium text-zinc-600 dark:text-zinc-400">
              Status:
            </div>
            <div
              className={`font-bold ${
                item.status === 'Available' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {item.status}
            </div>

            <div className="font-medium text-zinc-600 dark:text-zinc-400">
              Team Size:
            </div>
            <div>{item.teamSize || 'N/A'}</div>

            <div className="font-medium text-zinc-600 dark:text-zinc-400">
              Parent Resource:
            </div>
            <div>{item.parentResource || 'N/A'}</div>

            <div className="font-medium text-zinc-600 dark:text-zinc-400">
              Location:
            </div>
            <div>
              <a
                href="/dashboard/main"
                className="text-blue-500 underline hover:text-blue-700"
              >
                {item.location}
              </a>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default InfoCardDetailComponent;
