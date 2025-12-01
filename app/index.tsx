import {
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  DraggableEvent,
  DraggableEventProps,
  EventItem,
  SelectedEventType,
} from '@howljs/calendar-kit';
import * as React from 'react';
import { Text, View } from 'react-native';

const resources = [
  { id: 'room1', title: 'Meeting Room 1' },
  { id: 'room2', title: 'Meeting Room 2' },
  { id: 'room3', title: 'Conference Room' },
  { id: 'room4', title: 'Room 4' },
  { id: 'room5', title: 'Room 5' },
  { id: 'room6', title: 'Room 6' },
  { id: 'room7', title: 'Room 7' },
  { id: 'room8', title: 'Room 8' },
  { id: 'room9', title: 'Room 9' },
  { id: 'room10', title: 'Room 10' },
];

const now = new Date();

const events = [
  {
    id: 'event1',
    title: 'Event 1',
    start: { dateTime: now.toISOString() },
    end: { dateTime: new Date(new Date().setHours(now.getHours() + 1)).toISOString() },
    resourceId: 'room3',
  },
] satisfies EventItem[];

export default function Screen() {
  const [selectedEvent, setSelectedEvent] = React.useState<SelectedEventType | undefined>(
    undefined
  );

  const handleDragEnd = React.useCallback(() => {
    setSelectedEvent(undefined); // Clear the selected event after editing
  }, []);

  const renderDraggableEvent = React.useCallback(
    (props: DraggableEventProps) => (
      <DraggableEvent
        {...props}
        TopEdgeComponent={
          <View
            style={{
              height: 15,
              backgroundColor: 'red',
              position: 'absolute',
              width: '100%',
            }}>
            <Text style={{ textAlign: 'center', fontSize: 10 }}>Drag</Text>
          </View>
        }
        BottomEdgeComponent={
          <View
            style={{
              height: 15,
              backgroundColor: 'red',
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}>
            <Text style={{ textAlign: 'center', fontSize: 10 }}>Drag</Text>
          </View>
        }
      />
    ),
    []
  );
  return (
    <>
      <CalendarContainer
        events={events}
        resources={resources}
        resourcePerPage={5}
        resourcePagingEnabled={true}
        enableResourceScroll={true}
        selectedEvent={selectedEvent}
        onLongPressEvent={setSelectedEvent}
        allowDragToEdit={true}
        allowDragToCreate={true}
        onDragSelectedEventEnd={handleDragEnd}>
        <CalendarHeader />
        <CalendarBody renderDraggableEvent={renderDraggableEvent} />
      </CalendarContainer>
    </>
  );
}
