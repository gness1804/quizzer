import React, { Component } from 'react';

class EachAnswerBlock extends Component {

  render() {

    const { title, uniqname } = this.props;

    return (
      <div>
        <label htmlFor={`${title.substring(0, 3)}`}>
          <span className="answer-text">{title}</span>
          <input name={uniqname} className="answer" id={`${title.substring(0, 3)}`} type="radio" />
        </label>
      </div>
    );
  }

}


export default EachAnswerBlock;
