import React, { Component } from 'react';

class EachAnswerBlock extends Component {

  render() {

    const { title, uniqname } = this.props;

    return (
      <div>
        <label htmlFor="answer">
          {title}
          <input name={uniqname} className="answer" type="radio" />
        </label>
      </div>
    );
  }

}


export default EachAnswerBlock;
