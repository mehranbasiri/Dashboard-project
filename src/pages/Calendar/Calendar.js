import React from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timegridPlugin from "@fullcalendar/timegrid";
import useCalendar from "../../store/StoreCalendar";
import { createEventId } from "../../data";
const Calendar = () => {
  const { currentEvents, setCurrentEvents } = useCalendar();
  const handleEvents = async (event) => {
    await Promise.resolve(setCurrentEvents(event));
  };
  const handleDateSelect = (selectInfo) => {
    let title = prompt("please enter a title for event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm("Are you sure want to delete this event?")) {
      clickInfo.event.remove();
    }
  };
  return (
    <div className="calender-container">
      <div>
        <FullCalendar
          height={615}
          plugins={[dayGridPlugin, interactionPlugin, timegridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          allDaySlot={false}
          initialView="timeGridWeek"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvents}
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
