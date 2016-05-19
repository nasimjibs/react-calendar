import React,{Component} from 'react';
import Moment from 'moment';
import createCalendar from './create_calendar';
import { Button, Navbar, Nav, CollapsibleNav, NavItem, NavDropdown, NavBrand, MenuItem } from 'react-bootstrap';


class DailyView extends Component {
  render(){
    return(
      <div className="container">
      <div className="row">
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        <div className="col-md-1">.col-md-1</div>
        </div>
      </div>
    );
  }
}
export default DailyView;
