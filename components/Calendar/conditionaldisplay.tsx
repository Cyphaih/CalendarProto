"use client"
import React from 'react';
import { useCalendarContext } from '@/app/context';
import { ListView } from './list';
import MonthView from './month';
import WeekView from './week';

type CalendarView = 'list' | 'month' | 'week';




export function ConditionalDisplay() {
  const { currentView, setCurrentView } = useCalendarContext(); 

  return (
    <div className='mx-80 '>
      {currentView === 'list' && <ListView />}
      {currentView === 'month' && <MonthView />}
      {currentView=== 'week' && <WeekView />}
    </div>
  );
}