import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
    render() {
        return (
            <div>
                <Header totalQuantity={this.props.totalQuantity}
                />
            </div>
        );
    }
}
const mapDispatchToProps = (state) => {
  return  {
      totalQuantity: state.menuPage.totalQuantity
  }
};

export default connect(mapDispatchToProps)(HeaderContainer);