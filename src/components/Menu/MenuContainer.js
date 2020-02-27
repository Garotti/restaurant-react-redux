import React from 'react';
import Menu from "./Menu";
import {connect} from "react-redux";
import {addQuantity, addToCart, setDessert, setMains, subtractQuantity} from "../../redux/menu-reducer";

class MenuContainer extends React.Component {

    render() {
        return (
            <div>
                <Menu menu={this.props.menu}
                      total={this.props.total}
                      itemTotal={this.props.itemTotal}
                      items={this.props.items}
                      desserts={this.props.desserts}


                      addToCart={this.props.addToCart}
                      addQuantity={this.props.addQuantity}
                      subtractQuantity={this.props.subtractQuantity}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        total: state.menuPage.total,
        itemTotal: state.menuPage.itemTotal,

        desserts: state.menuPage.desserts,
        menu: state.menuPage.items,
        items: state.menuPage.addedItems,
    }
};

const mapDispatchToProps = {
    addToCart: addToCart,
    addQuantity: addQuantity,
    subtractQuantity: subtractQuantity
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer);