import React, { Component } from 'react';

class EachQuestion extends Component {

  render() {

    const { title, answers } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        {answers.map(a => <p>{a.title}</p>)}
      </div>
    );
  }

}


export default EachQuestion;
