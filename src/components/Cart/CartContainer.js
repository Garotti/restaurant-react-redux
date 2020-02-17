import React from 'react';
import Cart from "./Cart";
import {connect} from "react-redux";
import {addToCart, removeItem, setMenuAc} from "../../redux/menu-reducer";

class CartContainer extends React.Component {
    render() {
        return (
            <div>
                <Cart items={this.props.items}
                      total={this.props.total}
                      removeItem={this.props.removeItem}
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

const mapDispatchToProps = {
    removeItem: removeItem
};


export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);