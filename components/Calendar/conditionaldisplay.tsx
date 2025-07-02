"use client"
import React from 'react';
import { useCalendarContext } from '@/app/context';
import { ListView } from './list';
import MonthView from './month';
import WeekView from './week';






export function ConditionalDisplay() {
  const { currentView} = useCalendarContext(); 

  return (
    <div>
      {currentView === 'list' && <ListView />}
      {currentView === 'month' && <MonthView />}
      {currentView=== 'week' && <WeekView />}
    </div>
  );
}