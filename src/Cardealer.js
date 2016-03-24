import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewList from './ReviewList';

class Cardealer extends React.Component {
  constructor() {
  super();

  this.state = {
      company_name: {},
      brand: {},
      location: {},
      year: {}
    };
  }
}

  componentDidMount() {
    this.findCardealer();
  }

  findCardealer() {
    console.log("Searching Cardealer");

    let cardealerId = this.props.params.cardealerId;

    let component = this;

    jQuery.getJSON("http://aqueous-hamlet-58784.herokuapp.com/cardealers" + cardealerId + ".json", function(data) {
      console.log(data);

      component.setState({
        company_name: data.company_name,
        brand: data.brand
        location: data.location,
        year: data.year
      });
    });
  }

  render() {
    return(
      <div>
        <h1>{this.state.cardealer.company_name}({this.state.brand})</h1>
        <hr />
        <h4>{this.state.cardealer.location}</h4>
        <p>Director: {this.state.cardealer.year}</p>
        <hr />
        <h4>Reviews</h4>
        <ReviewList cardealerId={this.props.params.cardealerId} />
      </div>
    );
  }
}

export default Cardealer;
