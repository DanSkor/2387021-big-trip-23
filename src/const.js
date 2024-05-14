const FILTERS = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const TRIP_EMPTY_MESSAGES = {
  [FILTERS.EVERYTHING]: 'Click New Event to create your first point',
  [FILTERS.FUTURE] : 'There are no future events now',
  [FILTERS.PRESENT] : 'There are no present events now',
  [FILTERS.PAST] : 'There are no past events now',
};

const SORT = ['Day', 'Event', 'Time', 'Price', 'Offers'];
const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';

export {FILTERS, TRIP_EMPTY_MESSAGES, SORT, DATE_FORMAT, TIME_FORMAT};
