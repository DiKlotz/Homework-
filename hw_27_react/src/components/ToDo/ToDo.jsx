import React, { Component } from "react";
import List from "../List/List";

class ToDo extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  transferToSecond() {
    this.setState({
      secondList: [this.state.firstList.shift(), ...this.state.secondList],
    });
  }

  transferToFirst() {
    this.setState({
      firstList: [this.state.secondList.shift(), ...this.state.firstList],
    });
  }

  transferToThird() {
    this.setState({
      thirdList: [this.state.secondList.shift(), ...this.state.thirdList],
    });
  }

  removeLastItem() {
    this.setState({
      thirdList: this.state.thirdList.slice(0, -1),
    });
  }

  render() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
            <List list={this.state.firstList} 
            actions={[
                {btn: "Transfer firts to right", action: this.transferToSecond.bind(this)},
            ]}/>
            <List list={this.state.secondList} 
            actions={[
                {btn: "Transfer firts to left", action: this.transferToFirst.bind(this)},
                {btn: "Transfer firts to righ", action: this.transferToThird.bind(this)}
            ]}/>
            <List list={this.state.thirdList}
            actions={[
                {btn: "Remove last item", action: this.removeLastItem.bind(this)},
            ]}/>
        </div>
    );
}
}

export default ToDo;