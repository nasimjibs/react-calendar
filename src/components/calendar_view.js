import React,{Component} from 'react';
import Moment from 'moment';
import MonthlyView from './calendar_view/monthly_view';
import createCalendar from './create_calendar';



class CalendarView extends Component {
  render() {
    const currentTime = this.props.now;
    const startOfMonth = currentTime.startOf('month');
    let startOfWeek = (startOfMonth.weekday()=== 0)? 0+7 : startOfMonth.weekday();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    return (
      <div className='Calendar'>
        <div className='Calendar-header'>
          <button >&laquo;</button>
          <div className='Calendar-header-currentDate'>{currentTime.format('MMMM YYYY')}</div>
          <button >&raquo;</button>
        </div>
        <div className='Calendar-grid'>
          {dayNames.map( (day, index) =>
            <div
              className='Calendar-grid-item Header' >
              {day}
            </div>
          )}
          {createCalendar(currentTime, startOfWeek).map((day, i) =>
            <div
              className={`Calendar-grid-item ${day.classNames}`}>
              {day.day.format('D')}
            </div>
          )}
        </div>
      </div>
    );
  }
}



export default CalendarView;
