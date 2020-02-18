import React from 'react';
import Menu from "./Menu";
import {connect} from "react-redux";
import {addQuantity, addToCart, subtractQuantity} from "../../redux/menu-reducer";

class MenuContainer extends React.Component {

    render() {
        return (
            <div>
                <Menu menu={this.props.menu}
                      total={this.props.total}
                      itemTotal={this.props.itemTotal}
                      addToCart={this.props.addToCart}
                      items={this.props.items}
                      addQuantity={this.props.addQuantity}
                      subtractQuantity={this.props.subtractQuantity}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        menu: state.menuPage.items,
        total: state.menuPage.total,
        items: state.menuPage.addedItems,
        itemTotal: state.menuPage.itemTotal
    }
};

const mapDispatchToProps = {
    addToCart: addToCart,
    addQuantity: addQuantity,
    subtractQuantity: subtractQuantity
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer);