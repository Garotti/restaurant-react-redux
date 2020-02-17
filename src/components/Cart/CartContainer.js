import React from 'react';
import Cart from "./Cart";
import {connect} from "react-redux";

class CartContainer extends React.Component {
    render() {
        return (
            <div>
                <Cart items={this.props.items}
                      total={this.props.total}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        items: state.menuPage.addedItems,
        total: state.menuPage.total

        // addedItems: state.addedItems
    }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);