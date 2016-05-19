import React,{Component} from 'react';
import Moment from 'moment';
import CreateCalendar from './create_calendar';
import organizeView from './organize_view';

class MonthlyView extends Component {
  render(){
    const currentTime = this.props.now;
    const headerText = currentTime.format('MMMM YYYY');
    const createCalendar = CreateCalendar(currentTime, 'monthly_view');

    return (
      <div>{createCalendar}</div>
    );
  }
}

export default MonthlyView;
