import React, { Component } from 'react';
import axios from 'axios';
import EachQuestion from "./EachQuestion";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      questions: [],
    };
  }

  getAllQuizzes(){
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

  getOnlyOneQuiz(){
    let that = this;
    let qid = prompt('Please enter in the quiz id.');
    var hitAPI = new XMLHttpRequest();
    hitAPI.open('GET', `http://localhost:3001/quizzes/${qid}`, true);
    hitAPI.send();
    hitAPI.onreadystatechange = function() {
      if (hitAPI.readyState === XMLHttpRequest.DONE) {
        if (hitAPI.status === 200) {
          let result = JSON.parse(hitAPI.responseText);
          that.setState({ title: result.quiz.title });
          that.setState({ questions: result.quiz.questions });
        } else {
          console.error('There was a problem with the API call.');
        }
      }
    }
  }

  postNewQuestion(){
    const qid = prompt('Please enter the ID of the quiz you wish to modify.');
    axios.post(`http://localhost:3001/quizzes/${qid}/questions`, {
      "title": "What is a linear gradient?",
      "answers": [
        {
          score: 2,
          title: 'A way of introducing a subtle color shifting effect in CSS.',
        },
        {
          score: 0,
          title: 'A really effing big deal.',
        },
        {
          score: 1,
          title: 'Lebron James.',
        },
        {
          score: 3,
          title: 'An enduring fascination back in Mod 1.',
        },
      ],
    }).then((response) => { console.log(response) }).catch((err) => { console.log(err) });
  }

  render() {

    const { title, questions } = this.state;

    return (
      <div>
        {title ? <h1 className="headline">{title}</h1> : ''}
        <button className="top-button" onClick={() => { this.getAllQuizzes() }}>Get All Quizzes!</button>
        <button className="top-button" onClick={() => { this.getOnlyOneQuiz()} }>Get only one quiz</button>
        <button className="top-button" onClick={() => { this.postNewQuestion()} }>Post New Question</button>
        <ul>
          <li>{questions.map(q => <EachQuestion {...q} key={q.id} />)}</li>
        </ul>
        <button className="submit-button">Submit</button>
      </div>
    );
  }

}


export default Quiz;
