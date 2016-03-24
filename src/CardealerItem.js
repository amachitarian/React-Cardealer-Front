import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class CardealerItem extends React.Component {
    constructor(){
        super();
        this.state = {
          id: null,
          company_name: "",
          brand: "",
          location: "",
          year: "",
        };
    }

  componentDidMount() {
  this.setState({
    key: this.props.id,
    id: this.props.id,
    company_name: this.props.company_name,
    brand: this.props.brand,
    location: this.props.location,
    year: this.props.year
    })
  }

    render() {
        return (
              <tr>
                <td><Link to={`/cardealer/${this.state.id}`}>{this.state.company_name}</Link>({this.state.brand})</td>
              </tr>
        );
    }
}

export default CardealerItem;
