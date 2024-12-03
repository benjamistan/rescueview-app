'use client';

import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { HiMapPin } from 'react-icons/hi2';

let map;

export default function MacroMapComponent() {
  useEffect(() => {
    // Ensure the map is initialized after the DOM element is present
    map = L.map('map').setView([39.436301, -0.391013], 12);

    // Add a tile layer (OpenStreetMap in this case)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // OOptions
    }).addTo(map);

    // Optional: Add a marker to the map
    //L.marker([51.505, -0.09]).addTo(map).bindPopup('Center Point').openPopup();
  }, []); // Runs only once when the component mounts

  return (
    <Card className="w-full items-center justify-between rounded-md border-zinc-200 bg-clip-border dark:border-zinc-800">
      <CardHeader className="flex items-start md:items-center justify-between gap-4 space-y-0 py-5 sm:flex-row">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-4xl dark:border-zinc-800 text-foreground dark:text-white">
          <HiMapPin className="h-5 w-5 text-foreground dark:text-white" />
        </div>
        <div className="grid flex-1 gap-1 text-left">
          <CardTitle className="text-2xl font-bold leading-6 text-foreground dark:text-white">
            Macro Map
          </CardTitle>
          <CardDescription className="text-xs font-medium leading-5 text-zinc-500 dark:text-zinc-400">
            Valencia - Flood
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <div
          id="map"
          className="h-[500px] w-full rounded-md border dark:border-zinc-800"
        ></div>
      </CardContent>
    </Card>
  );
}
