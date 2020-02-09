const React = require("react");
// const { Component } = React;

class WordRelay extends React.Component {
  state = {
    word: "해랑쓰",
    value: "",
    result: ""
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "Correct",
        word: this.state.value,
        value: ""
      });
    } else {
      this.setState({
        result: "땡",
        word: "",
        value: ""
      });
    }
    this.input.focus();
  };

  onChangeInput = e => {
    this.setState({ value: e.target.value });
  };

  input;

  onRefInput = c => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <div>
            <button>Webpack-hot-loader testing...</button>
          </div>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
