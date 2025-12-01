# Calendar Kit Multi-Resource Draggable Event Bug Reproduction

This is a minimal reproduction repository demonstrating a bug in [@howljs/calendar-kit](https://www.npmjs.com/package/@howljs/calendar-kit) where draggable events are rendered in the wrong position when using multiple resources with pagination and scrolling enabled.

## Bug Description

When a calendar has:

- Multiple resources (more than the resources per page)
- Resource pagination enabled (`resourcePagingEnabled={true}`)
- Resource scrolling enabled (`enableResourceScroll={true}`)
- A custom draggable event component

The draggable event appears to be rendered in the wrong position, shifted to the left of where it should be.

## Visual Indicators

The draggable event in this reproduction has **red top and bottom borders** to make it easy to identify. These are rendered via the `TopEdgeComponent` and `BottomEdgeComponent` props on the `DraggableEvent` component.

## Reproduction Video

[`assets/images/repro-video.mov`](./assets/images/repro-video.mov)

## Setup

This project uses:

- **Expo** (React Native framework)
- **@howljs/calendar-kit** v2.5.6
- **React Native** 0.81.5

### Installation

```bash
# Install dependencies
bun install

# Start the development server
bun run dev
```

## Configuration

The bug reproduction uses the following Calendar Kit configuration:

- **Resources**: 10 meeting rooms
- **Resources per page**: 5 (`resourcePerPage={5}`)
- **Resource pagination**: Enabled (`resourcePagingEnabled={true}`)
- **Resource scrolling**: Enabled (`enableResourceScroll={true}`)
- **Drag to edit**: Enabled (`allowDragToEdit={true}`)
- **Drag to create**: Enabled (`allowDragToCreate={true}`)

## How to Reproduce

1. Run the app using `bun run dev`
2. Navigate to a resource that is not on the first page (scroll down to see resources 6-10)
3. Long press on an event to select it for dragging
4. Observe that the draggable event (with red top and bottom borders) appears shifted to the left of its actual position

## Expected Behavior

The draggable event should appear at the correct horizontal position, aligned with the original event location.

## Actual Behavior

The draggable event appears shifted to the left, misaligned with the original event position.
