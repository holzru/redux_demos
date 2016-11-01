import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/blog_actions';
import { Link } from 'react-router';

class BlogIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={"blog/" + post.id}>
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
        <div className="component">
          <div className="blog-menu">
            <h3>Posts</h3>
            <Link to='/blog/new' className="btn btn-primary">
              Add A Post
            </Link>
          </div>
          <div>
            <ul className='list-group'>
              {this.renderPosts()}
            </ul>
          </div>
        </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts}, dispatch);
// }

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, {fetchPosts})(BlogIndex);
