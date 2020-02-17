import React from 'react';
import Menu from "./Menu";
import {connect} from "react-redux";
import {addToCart} from "../../redux/menu-reducer";

class MenuContainer extends React.Component {

    render() {
        return (
            <div>
                <Menu menu={this.props.menu}
                      total={this.props.total}
                      addToCart={this.props.addToCart}
                      items={this.props.items}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        menu: state.menuPage.items,
        total: state.menuPage.total,
        items: state.menuPage.addedItems
    }
};

const mapDispatchToProps = {
    addToCart: addToCart
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuContainer);