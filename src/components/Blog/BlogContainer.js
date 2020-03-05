import React from 'react';
import {connect} from "react-redux";
import Blog from "./Blog";

class BlogContainer extends React.Component {
    render() {
        return (
            <div>
                <Blog blog={this.props.blogItems}
                />
            </div>
        );
    }
}
const mapDispatchToProps = (state) => {
      return {
          blogItems: state.blogPage.blogItems
      }
};
export default connect(mapDispatchToProps)(BlogContainer);