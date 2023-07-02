import React from "react";
import { create } from "zustand";
import { INITIAL_EVENTS } from "../data";
const StoreCalendar = create((set) => ({
  currentEvents: INITIAL_EVENTS,

  setCurrentEvents: (event) => set({ currentEvents: event }),
}));

export default StoreCalendar;
