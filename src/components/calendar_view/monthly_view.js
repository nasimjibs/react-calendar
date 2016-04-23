import React,{Component} from 'react';
import range from 'lodash';
import Moment from 'moment';

const MonthlyView = (props)=>{
const currentTime = props.dateProp;


const year = currentTime.year();
const month = currentTime.format('MMMM');


let startOfMonth = currentTime.startOf('month');
let startOfWeek = startOfMonth.weekday();
let weekOffset = startOfWeek % 7;


const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysInMonth = currentTime.daysInMonth();
const calendarElement = generateCalendar(startOfMonth,daysInMonth);

console.log(generateElement);

function generateCalendar(startDate = 0, totalDays){
  const monthArr = new Array (7, 6);
  monthArr.splice(0, 2);
  const totalCalendarGrid = 42; //0-41
  const emptyElementAtEnd = totalCalendarGrid - startDate + 1;

  let j = 1;
  let a = 0;

  while(a < startDate){
  	monthArr.push('');
    a++;
  }

  while(j<emptyElementAtEnd){
	   let pushElement = (j<totalDays ||j == totalDays) ? j : '';
     monthArr.push(pushElement);
     j++;
   }

  return monthArr;
 }

const tableHeader = dayNames.map( (day, index) => {return <div className='Calendar-grid-item' >{day}</div>});
const createCalendarDates = calendarElement.map( (date, index) => {
  return <div className='Calendar-grid-item' >{date}</div>
});

return(
<div >
  <div className='Calendar-header'>
    <button >&laquo;</button>
      <div className='Calendar-header'>{month} {year}</div>
      <button >&raquo;</button>
  </div>
  <div className='Calendar-grid'>
    {tableHeader}
    {createCalendarDates}
  </div>
</div>
);

};

export default MonthlyView;
