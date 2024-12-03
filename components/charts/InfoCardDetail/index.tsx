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
        <ul className="space-y-4">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 border-zinc-200 p-4 text-start dark:border-zinc-800"
            >
              <div className="text-start">
                <strong>Resource:</strong> {item.resource || 'N/A'}
              </div>
              <div className="text-start">
                <strong>Type:</strong> {item.type}
              </div>
              <div className="text-start">
                <strong>Status:</strong>{' '}
                <span
                  className={`font-bold ${
                    item.status === 'Available'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="text-start">
                <strong>Team Size:</strong> {item.teamSize || 'N/A'}
              </div>
              <div className="text-start">
                <strong>Parent Resource:</strong> {item.parentResource || 'N/A'}
              </div>
              <div className="text-start">
                <strong>Location:</strong>{' '}
                <a
                  href="/dashboard/main"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {item.location}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default InfoCardDetailComponent;
