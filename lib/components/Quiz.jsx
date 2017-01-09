import React, { Component } from 'react';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  makeAPICall(){
    let that = this;
    var hitAPI = new XMLHttpRequest();
    hitAPI.open('GET', 'http://localhost:3001/quizzes', true);
    hitAPI.send();
    hitAPI.onreadystatechange = function() {
      if (hitAPI.readyState === XMLHttpRequest.DONE) {
        if (hitAPI.status === 200) {
          let result = JSON.parse(hitAPI.responseText);
          let singleQuiz = result.quizzes[0];
          that.setState({ title: singleQuiz.title });
        } else {
          console.error('There was a problem with the API call.');
        }
      }
    }
  }

  render() {

    const { title } = this.state;

    return (
      <div>
        <button onClick={() => { this.makeAPICall() }}>Click</button>
        {title}
      </div>
    );
  }

}


export default Quiz;
