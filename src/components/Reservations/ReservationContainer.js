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
                              info={this.props.info}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        info: state.reservationPage.info,
        date: state.reservationPage.date,
        optionsValue: state.reservationPage.optionsValue,
        howManyPeople: state.reservationPage.howManyPeople,
    }
};


export default connect(mapStateToProps)(ReservationContainer);