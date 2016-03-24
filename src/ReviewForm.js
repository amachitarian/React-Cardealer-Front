import React from 'react';
 import jQuery from 'jquery';

 class ReviewForm extends React.Component {
   constructor() {
     super();
   }

   createReview(event) {
     event.preventDefault();

     let component = this;
     let cardealerId = this.props.cardealerId;
     let name = this.refs.newName.value;
     let description = this.refs.newDescription.value;
     let rating = this.refs.newRating.value;

     let newReview = {
       id: null,
       name: name,
       description: description,
       rating: rating
     };

     jQuery.ajax({
       type: "POST",
       url: `http://aqueous-hamlet-58784.herokuapp.com/cardealers${cardealerId}/reviews`,
       data: JSON.stringify({
           review: newReview
       }),
       contentType: "application/json",
       dataType: "json"
     })
       .done(function(data) {
         component.props.onChange();
         component.refs.newName.value = "";
         component.refs.newDescription.value = "";
         component.refs.newRating.value = "";
       })

       .fail(function(error) {
         console.log(error);
       });
   }

   render() {
     return (
       <form onSubmit={this.createReview.bind(this)}>
         <div>
          <input ref="newName" placeholder="Firstname Lastname" />
        </div>
        <div>
          <input ref="newDescription" placeholder="Description/review" />
        </div>
        <div>
          <select ref="newRating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
           </select>
           <button type="submit">Rate</button>
         </div>
       </form>
     );
   }
 }

 export default ReviewForm;
