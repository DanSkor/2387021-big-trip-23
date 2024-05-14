import dayjs from 'dayjs';
import {DATE_FORMAT, TIME_FORMAT} from '../const.js';

function humanizeDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizeDueTime(dueTime) {
  return dueTime ? dayjs(dueTime).format(TIME_FORMAT) : '';
}

function getDuration(startTime, endTime) {
  const start = dayjs(startTime).startOf('minute');
  const end = dayjs(endTime).startOf('minute');
  const diffInMs = end.diff(start);
  // eslint-disable-next-line
  const duration = require('dayjs/plugin/duration');
  dayjs.extend(duration);
  const durationLol = dayjs.duration(diffInMs);

  const days = Math.floor(durationLol.asDays());
  const hours = durationLol.hours();
  const minutes = durationLol.minutes();

  if (days > 0) {
    return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  return `${minutes.toString().padStart(2, '0')}M`;
}

function getActiveClass(isActive, acriveClass) {
  return isActive ? acriveClass : '';
}

export {humanizeDueDate, humanizeDueTime, getDuration, getActiveClass};
