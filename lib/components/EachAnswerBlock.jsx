import React, { Component } from 'react';

class EachAnswerBlock extends Component {

  render() {

    const { title } = this.props;

    return (
      <div>
        <label>
          <input type="radio" />
          <p>{title}</p>
        </label>
      </div>
    );
  }

}


export default EachAnswerBlock;
