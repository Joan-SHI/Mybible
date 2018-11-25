import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

// const LoadSubreddit = ({dispatch}) => (
//   <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//     Fetch Posts
//   </button>
// )

// export default connect()(LoadSubreddit)


class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }
  
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <button onClick={() => this.props.fetchPosts('newzealand')}>
          NZ
        </button>
        <button onClick={() => this.props.fetchPosts('wellington')}>
          Wellington
        </button>
      </React.Fragment>
  )
}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: subreddit => {
      return dispatch(fetchPosts(subreddit));
    }
  };
};

export default connect(null ,mapDispatchToProps)(LoadSubreddit)
