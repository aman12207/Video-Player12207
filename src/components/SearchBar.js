import React from 'react'

class SearchBar extends React.Component{
  state = {text: ""}
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.OnSearch(this.state.text);
    this.setState({text : ""});
  }
  render(){
    return (
    <div className="ui segment">
      <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
              <label>Video Search</label>
              <input
              value={this.state.text}
              onChange={(event)=>this.setState({text: event.target.value})}
              type = "text" />
          </div>
      </form>
    </div>);
  }
}

export default SearchBar;