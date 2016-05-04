import { range } from 'lodash';
import Moment from 'moment';

export default function createCalendar(date, diff) {

  let datesPrevious = Moment(date).subtract(1,'months').endOf('month');

  const prevMonthDays = range(datesPrevious.daysInMonth()-diff+1, datesPrevious.daysInMonth()+1).map(n => ({
    day: Moment([datesPrevious.year(), datesPrevious.month(), n]),
    classNames: 'prevMonth'
  }));

  const currentMonthDays = range(1, date.daysInMonth() + 1).map(index => ({
    day: Moment([date.year(), date.month(), index]),
    classNames: ''
  }));

  const daysAdded = prevMonthDays.length + currentMonthDays.length;

  let datesNext = Moment(date).add(1,'months').startOf('month');

  const nextMonthDays = range(1, 42-daysAdded+1).map(n => ({
    day: Moment([datesNext.year(), datesNext.month(), n]),
    classNames: 'nextMonth'
  }));





  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}
