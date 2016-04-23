import React,{Component} from 'react';
import Moment from 'moment';
import MonthlyView from './calendar_view/monthly_view'
//import { range, takeWhile, last } from 'lodash';


class CalendarView extends Component {

  render(){
    const currentTime = this.props.now;

    return (
      <div className='Calendar'>
          <div className="btn-group">
            <button type="button" className="btn btn-primary">Day</button>
            <button type="button" className="btn btn-primary">Week</button>
            <button type="button" className="btn btn-primary">Month</button>
            <button type="button" className="btn btn-primary">Year</button>
          </div>
          <div>  <MonthlyView dateProp = {currentTime} /> </div>

      </div>

    );
  };
}



export default CalendarView;
