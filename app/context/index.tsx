'use client';

//Provides the view and date to the different scripts

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CalendarView = 'list' | 'month' | 'week'; 

interface CalendarContextType { 
  currentView: CalendarView;
  currentEventDate: Date;
  setCurrentView: (view: CalendarView) => void;
  setCurrentEventDate: (date: Date) => void;
}


const CalendarContext = createContext<CalendarContextType | undefined>(undefined);


interface CalendarContextProviderProps {
  children: ReactNode;
}


export function CalendarContextProvider({ children }: CalendarContextProviderProps) {
  const baseState: CalendarView = 'month'; 
  const [currentView, setCurrentView] = useState<CalendarView>(baseState);
  
  const [currentEventDate, setCurrentEventDate] = useState(new Date()); 

  return (
    <CalendarContext.Provider value={{ currentView, currentEventDate, setCurrentView, setCurrentEventDate }}>
      {children}
    </CalendarContext.Provider>
  );
}

export function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error('useCalendarContext must be used within a CalendarContextProvider');
  }
  return context;
}