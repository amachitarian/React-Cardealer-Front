import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import CardealerItem from './CardealerItem';

class CardealerList extends React.Component {

    constructor(){
        super();

        this.state = {
            cardealer: []
        };
    }

  reloadCardealers(event){
  let component = this;

    jQuery.getJSON("http://aqueous-hamlet-58784.herokuapp.com/cardealers", function(data){
      console.log(data);

        component.setState({
          cardealers: data.cardealers
        });
      });
    }

  componentDidMount() {
  this.reloadCardealers();
 }

    render() {
        return (
            <div>
            <h1>Cardealers:</h1>
              <table>
                <tbody>
                  {this.state.cardealers.map(function(cardealers, i) {
                    return(
                    <CardealerItem key={cardealer.id} id={cardealer.id} company_name={cardealer.name} brand={cardealer.average_rating} />
                    );
                  })}
                </tbody>
              </table>
              </div>
        );
    }
}

export default CardealerList;
