import React,{Component} from 'react';
import Moment from 'moment';
import MonthlyView from './monthly_view';
import DailyView from './daily_view';
import YearlyView from './yearly_view';

class CalendarView extends Component {
  
  render() {

    const selectedKey = this.props.selectedKey;
    const now = this.props.now;


    let view ='';
    switch(selectedKey) {
    case 'month':
      view = <MonthlyView now={now} />;
        break;
    case 'day':
        view = <DailyView now={now} />;
        break;
    case 'year':
        view = <YearlyView now={now} />;
        break;
    }

    return(
      <div>{view}</div>
    );
  }
}



export default CalendarView;
