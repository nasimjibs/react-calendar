import React,{Component} from 'react';
import Moment from 'moment';
import CreateCalendar from './create_calendar';
import { range } from 'lodash';

class YearlyView extends Component {
  render(){
    const currentTime = this.props.now;
    console.log(currentTime);
    const createCalendar = CreateCalendar(currentTime, 'yearly_view');
    return (
          <div className='Calendar-small'>{createCalendar}</div>
    );
  }
}

export default YearlyView;
