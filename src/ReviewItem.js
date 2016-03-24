import React from 'react';
import jQuery from 'jquery';

class ReviewItem extends React.Component {
   constructor() {
     super();

     this.state = {
         reviewitem: {}
       };
     }

   componentDidMount() {
    this.setState({
      key: this.props.id,
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      rating: this.props.rating
    })
  }

   render() {
     return(
      <div>
        <h4>{this.state.name}</h4>
        <p>{this.state.description}</p>
        <p>Rating: {this.state.rating}</p>
      </div>
     );
   }
 }

 export default ReviewItem;
