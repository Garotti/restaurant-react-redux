import React from 'react';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import Reservations from "./Reservations";

class ReservationContainer extends React.Component {
    render() {
        return (
            <div>
                <Reservations optionsValue={this.props.optionsValue}
                              people={this.props.howManyPeople}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        optionsValue: state.reservationPage.optionsValue,
        howManyPeople: state.reservationPage.howManyPeople,
    }
};


export default connect(mapStateToProps)(ReservationContainer);