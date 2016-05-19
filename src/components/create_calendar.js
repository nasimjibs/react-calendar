import React,{Component} from 'react';
import { range } from 'lodash';
import Moment from 'moment';




//export default function CreateCalendar(date, view='monthly_view') {
const CreateCalendar = (date, view) =>{
  console.log(date);
  const headerText = view == 'yearly_view' ? date.format('MMMM'): date.format('MMMM YYYY') ;
  const calendar = organizedView(date, headerText, view);
  return calendar;
};

const organizedView = (date, headerText, view) =>{
  const headerClass = view == 'yearly_view' ? 'Calendar-small-header':'Calendar-header';
  const calendarGrid = view == 'yearly_view' ? 'Calendar-grid-yearly':'Calendar-grid';
  const calendarWidth = view == 'yearly_view' ? '':'Calendar';
  const createDateObjArray = dateObjArray(date, view);
  const monthlyCalendarHeader =
    <div className='Calendar-header'>
      <button >&laquo;</button>
      <div>{headerText}</div>
      <button >&raquo;</button>
    </div>;
  const yearlyCalendarHeader =
    <div className='Calendar-small-header'>
      <div className='Small-header-text'>{headerText}</div>
    </div>;
  const calendarHeader = view == 'yearly_view' ? yearlyCalendarHeader : monthlyCalendarHeader;
  return (

      <div className={`${calendarWidth}`}>
        {calendarHeader}
        <div className={`${calendarGrid}`}>
          {createDateObjArray.map((day, i) =>
            <div
              className={`${day.classNames}`}>
              {((day.dayName) == '') ? day.day.format('D'): day.dayName}
            </div>
          )}
        </div>
      </div>
  );
}

const dateObjArray = (date, view='monthly_view')=>{
  if(view == 'monthly_view' || view == 'yearly_view'){
    const startOfMonth = date.startOf('month');
    const diff = (startOfMonth.weekday()=== 0)? 0+7 : startOfMonth.weekday();
    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dayNames = daysInWeek.map( (dayName, index) => ({
      day:'',
      classNames:'Calendar-grid-item Header',
      monthName: '',
      dayName: (view=='yearly_view') ? dayName.charAt(0): dayName
    }));

    let datesPrevious = Moment(date).subtract(1,'months').endOf('month');
    const prevMonthDays = range(datesPrevious.daysInMonth()-diff+1, datesPrevious.daysInMonth()+1).map(n => ({
      day: Moment([datesPrevious.year(), datesPrevious.month(), n]),
      classNames: 'Calendar-grid-item prevMonth',
      monthName: '',
      dayName:''
    }));

    const currentMonthDays = range(1, date.daysInMonth() + 1).map(index => ({
      day: Moment([date.year(), date.month(), index]),
      classNames: (Moment().format('D') == index)? 'Calendar-grid-item todaysDate':'Calendar-grid-item',
      monthName: '',
      dayName:''
    }));

    const daysAdded = prevMonthDays.length + currentMonthDays.length;

    let datesNext = Moment(date).add(1,'months').startOf('month');

    const nextMonthDays = range(1, 42-daysAdded+1).map(n => ({
      day: Moment([datesNext.year(), datesNext.month(), n]),
      classNames: 'Calendar-grid-item nextMonth',
      monthName: '',
      dayName:''
    }));

    return [...dayNames,...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }
};


export default CreateCalendar;
