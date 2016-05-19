import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import CalendarView from './components/calendar_view';
import { Button, Navbar, Nav, CollapsibleNav, NavItem, NavDropdown, NavBrand, MenuItem } from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey:'' };
  }


  render(){
    const now = Moment();

    const handleSelect = (selectedKey)=> {
      this.setState({selectedKey});
    };



    return (
          <div id="Calendar">
          <div className="row">
            <div className="col-md-2">1</div>
            <div className="col-md-8">
              <Nav className="pills" activeKey={1} onSelect={handleSelect}>
                <NavItem eventKey='day'>Day</NavItem>
                <NavItem eventKey='month'>Month</NavItem>
                <NavItem eventKey='year'>Year</NavItem>
              </Nav>
              <CalendarView selectedKey = {this.state.selectedKey} now={now}/>
            </div>
            <div className="col-md-2">1</div>
          </div>
        </div>

    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
