import React, { Component } from 'react';
import EachQuestion from "./EachQuestion";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      questions: [],
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
          that.setState({ questions: singleQuiz.questions });
        } else {
          console.error('There was a problem with the API call.');
        }
      }
    }
  }

  render() {

    const { title, questions } = this.state;

    return (
      <div>
        <button onClick={() => { this.makeAPICall() }}>Choose Your Poison!</button>
        {title}
        <ul>
          <li>{questions.map(q => <EachQuestion {...q} />)}</li>
        </ul>
      </div>
    );
  }

}


export default Quiz;
