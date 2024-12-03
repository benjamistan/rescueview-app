'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type RowObj = {
  incidentId?: string;
  description: string;
  fullDescription: string;
  severity: string;
  status?: string;
  location: string;
  assignedResource?: string;
};

const data: RowObj[] = [
  {
    incidentId: 'INC001',
    description: 'Building fire at Valencia city center',
    fullDescription:
      'A large fire has broken out in a residential building located in the heart of Valencia city center. Firefighters are actively working to contain the blaze and rescue trapped residents.',
    severity: 'High',
    status: 'Ongoing',
    location: '39.4699, -0.3763', // Valencia city center
    assignedResource: 'Fire Engine 1, Ambulance A2'
  }
];

function InfoCardIncidentDetailViewComponent() {
  return (
    <Card className="w-1/2 mt-5 p-4 border-zinc-200 text-zinc-950 dark:border-zinc-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Incident Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-y-4 text-start text-sm"
          >
            <div className="font-bold text-black dark:text-zinc-400">
              Incident ID:
            </div>
            <div>{item.incidentId || 'N/A'}</div>

            <div className="font-bold text-black dark:text-zinc-400">
              Description:
            </div>
            <div>{item.description}</div>

            <div className="font-bold text-black dark:text-zinc-400">
              Full Description:
            </div>
            <div>{item.fullDescription}</div>

            <div className="font-bold text-black dark:text-zinc-400">
              Severity:
            </div>
            <div className="font-bold text-red-500">{item.severity}</div>

            <div className="font-bold text-black dark:text-zinc-400">
              Status:
            </div>
            <div
              className={`font-bold ${
                item.status === 'Ongoing' ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {item.status || 'N/A'}
            </div>

            <div className="font-bold text-black dark:text-zinc-400">
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

            <div className="font-bold text-black dark:text-zinc-400">
              Assigned Resources:
            </div>
            <div>{item.assignedResource || 'N/A'}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default InfoCardIncidentDetailViewComponent;
