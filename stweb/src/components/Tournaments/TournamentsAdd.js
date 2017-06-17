import React, { Component } from 'react';
import { Button } from 'antd';

class TournamentsAdd extends Component {

  render() {
    return (
      <div>
        <Button onClick={this.props.backToList}> Back to List </Button>
      </div>
    )
  }
}

export default TournamentsAdd;
