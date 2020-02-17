import React from 'react';
import Cart from "./Cart";
import {connect} from "react-redux";
import {addQuantity, removeItem, subtractQuantity} from "../../redux/menu-reducer";

class CartContainer extends React.Component {
    render() {
        return (
            <div>
                <Cart items={this.props.items}
                      total={this.props.total}
                      removeItem={this.props.removeItem}
                      addQuantity={this.props.addQuantity}
                      subtractQuantity={this.props.subtractQuantity}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        items: state.menuPage.addedItems,
        total: state.menuPage.total

    }
};

const mapDispatchToProps = {
    removeItem: removeItem,
    addQuantity: addQuantity,
    subtractQuantity: subtractQuantity
};


export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);