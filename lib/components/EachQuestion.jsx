import React, { Component } from 'react';
import EachAnswerBlock from "./EachAnswerBlock";

class EachQuestion extends Component {

  render() {

    const { title, answers } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        {answers.map(a => <EachAnswerBlock {...a} key={a.score} />)}
      </div>
    );
  }

}


export default EachQuestion;
