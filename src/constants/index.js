/**
 * Link
 */
export const GOOGLE_CALENDAR_LINK = `https://calendar.google.com/calendar/u/0/r/eventedit/NGNkcXNmOTZtOTRzN2tibzI3aWpkZXA1YnUgZmxpa3NhdXNrYXMyMkBt`;
export const GOOGLE_MAPS_LINK = `https://goo.gl/maps/kfFTBJKwRhw3qWut8`;

/**
 * Wedding time
 */
export const EPOCH_START_EVENT = 1722110400;
export const EPOCH_END_EVENT = 1722110400;
export const UTC_WEDDING_TIME = '2024-07-20:20:00:00Z';

const date = new Date('2024-07-27T20:00:00Z');
const timestamp = date.getTime() / 1000; // Convert from milliseconds to seconds

console.log(timestamp);
