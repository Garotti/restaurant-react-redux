import React from 'react';
import {connect} from "react-redux";
import HomePage from "./HomePage";

class HomePageContainer extends React.Component {
    render() {
        return (
            <div>
                <HomePage home={this.props.home}
                          menu={this.props.menu}
                          delight={this.props.delight}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        home: state.homePage.homeInfo,
        menu: state.homePage.menu,
        delight: state.homePage.delight,
    }
};


export default connect(mapStateToProps)(HomePageContainer);