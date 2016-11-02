import React, {Component, PropTypes} from 'react';
import { connect } from "react-redux";
import { createPost } from "../../actions/blog_actions";
import { bindActionCreators } from 'redux';

class BlogNew extends Component {
  constructor(props) {
    super(props);

    this.state = {title: "", categories: "", content: ""};
    this.onFormInput = this.onFormInput.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };



  onFormInput(event) {
    switch(event.target.id) {
      case "title":
        return this.setState({title: event.target.value});
      case "categories":
        return this.setState({categories: event.target.value});
      case "content":
        return this.setState({content: event.target.value});
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.createPost({title: this.state.title, categories: this.state.categories, content: this.state.content})
      .then(() => {
        this.context.router.push('/blog');
    });
  }

  render() {
    return(
      <div className="component">
        <form onSubmit={this.onSubmit.bind(this)}>
          Title:
          <input id="title" className="form-control" value={this.state.title} onChange={this.onFormInput}/><br/>
          Categories:
          <input id="categories" className="form-control" value={this.state.categories} onChange={this.onFormInput}/><br/>
          Content:
          <textarea id="content" className="form-control" value={this.state.content} onChange={this.onFormInput}/><br/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogNew);
