import React from 'react';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';

class ReviewList extends React.Component {
  constructor() {
    super();

     this.state = {
       reviews: [],
       counts: {
         review: 0
       }
     };
   }

   reloadReviews(event) {
     console.log(this.props)
     let cardealerId = this.props.cardealerId;

     let component = this;

     jQuery.getJSON(`http://aqueous-hamlet-58784.herokuapp.com/cardealers${cardealerId}/reviews`, function(data) {
       console.log(data);

       component.setState({
         reviews: data.reviews
       });
     });
   }

   componentDidMount() {
      this.reloadReviews();
    }

   render() {
      return(
        <div>
          <ul>
            {this.state.reviews.map(function(review, i) {
              return(
                <li><ReviewItem key={review.id} id={review.id} name={review.name} description={review.description} rating={review.rating} cardealersId={review.cardealersId} onChange={this.reloadReviews.bind(this)} /></li>
              );
            }, this)}
          </ul>
          <ReviewForm onChange={this.reloadReviews.bind(this)} cardealerId={this.props.cardealerId} />
        </div>
      );
    }
  }

export default ReviewList;
