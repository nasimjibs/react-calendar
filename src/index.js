import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import CalendarView from './components/calendar_view';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const now = Moment('2016-03-01');
    return (
        <div className="container">
          <div className="row">
            <div className="col-md3">
              some text goes here
            </div>
            <div id='calendar' className="col-md6">
              <div className="btn-group CenterAlign" data-toggle="buttons-checkbox">
                <button type="button" className="btn btn-primary">Day</button>
                <button type="button" className="btn btn-primary">Month</button>
                <button type="button" className="btn btn-primary">Year</button>
              </div>
              <CalendarView now = {now} />
            </div>
            <div className="col-md3">
              some text goes here
            </div>

          </div>
        </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
