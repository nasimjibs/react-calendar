import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import CalendarView from './components/calendar_view';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const now = Moment();
    return (
        <div className="container">
          <div className="col-md3">
          "the text goes here"
          </div>
          <div id='calendar' className="col-md6">
            <CalendarView now = {now} />
          </div>
          <div className="col-md3">
          "the text goes here"
          </div>
        </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
