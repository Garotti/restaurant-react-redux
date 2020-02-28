import React from 'react';
import {connect} from "react-redux";
import Reservations from "./Reservations";

class ReservationContainer extends React.Component {
    render() {
        return (
            <div>
                <Reservations optionsValue={this.props.optionsValue}
                              people={this.props.howManyPeople}
                              date={this.props.date}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        date: state.reservationPage.date,
        optionsValue: state.reservationPage.optionsValue,
        howManyPeople: state.reservationPage.howManyPeople,
    }
};


export default connect(mapStateToProps)(ReservationContainer);