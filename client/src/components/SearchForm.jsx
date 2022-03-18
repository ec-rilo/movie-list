import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this);
  }

  updateText(userInput) {
    this.setState({
      text: userInput
    });
  }

  render() {
    return (
      <form className="search-form" onSubmit={(e) => {
        e.preventDefault();
        this.props.searchHandler(this.state.text);
        this.setState({
          text: ''
        });
      }}>
        <input type='text' placeholder={this.props.btnPlaceholder} value={this.state.text} onChange={(e) => this.updateText(e.target.value)}/>
        <button type='submit'>{this.props.btnTxt}</button>
      </form>
    );
  }
}

export default SearchForm;