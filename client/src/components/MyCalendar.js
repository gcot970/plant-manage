import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events, addEvent }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [showEventForm, setShowEventForm] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

    const handleSelectSlot = ({ start }) => {
        // When a date is clicked, set the selected date and show the event form
        setSelectedDate(start);
        setShowEventForm(true);
    };

    const handleEventSubmit = (e) => {
        e.preventDefault();

        // Create a new event object and add it using the addEvent prop
        const eventToAdd = {
            title: newEvent.title,
            start: selectedDate,
            end: new Date(selectedDate.getTime() + (60 * 60 * 1000)), // 1 hour duration (adjust as needed)
        };

        addEvent(eventToAdd);

        // Clear the form and hide it
        setNewEvent({ title: '', start: '', end: '' });
        setShowEventForm(false);
        setSelectedDate(null);
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                selectable={true} // Allow date selection
                onSelectSlot={handleSelectSlot} // Handle date selection
            />

            {/* Event creation form */}
            {showEventForm && (
                <form onSubmit={handleEventSubmit}>
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                    <button type="submit">Create</button>
                </form>
            )}
        </div>
    );
};

export default MyCalendar;