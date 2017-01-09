import React, { Component } from 'react';

class Quiz extends Component {

  makeAPICall(){
  var hitAPI = new XMLHttpRequest();
  hitAPI.open('GET', 'http://localhost:3001/quizzes', true);
  hitAPI.send();
  hitAPI.onreadystatechange = function() {
    if (hitAPI.readyState === XMLHttpRequest.DONE) {
      if (hitAPI.status === 200) {
        console.log(JSON.parse(hitAPI.responseText));
      } else {
        console.error('There was a problem with the API call.');
      }
    }
  }
  }

  render() {
    return (
      <div onLoad={ this.makeAPICall() }>
        
      </div>
    );
  }

}


export default Quiz;
