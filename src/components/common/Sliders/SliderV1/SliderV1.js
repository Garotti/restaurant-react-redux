import React from 'react';
import s from './SliderV1.module.scss'
import slide_1 from '../../../../assets/images/slider-1.jpeg'
import slide_2 from '../../../../assets/images/slider-2.jpeg'
import slide_3 from '../../../../assets/images/slider-3.jpeg'
import {FaChevronLeft, FaChevronRight} from "react-icons/all";

class SliderV1 extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
                slide_1,slide_2,slide_3
            ],
            currentImageIndex: 0,
            isCycleMode: false
        };
        this.nextSliderHandler = this.nextSliderHandler.bind(this);
    }

    nextSliderHandler = (e) => {
        let newIndex = this.state.currentImageIndex;
        if (e.currentTarget.dataset.direction === 'next') {
            newIndex = this.state.currentImageIndex + 1;
            if(newIndex > 2){
                newIndex = 0
            }
        }if(e.currentTarget.dataset.direction === 'prev'){
            newIndex = this.state.currentImageIndex -1;
            if (newIndex < 0 ){
                newIndex = 2;
            }
        }
        this.setState({currentImageIndex: newIndex})

    };

    render() {
        return (
            <div className={s.slider_v1}>
                <div className={s.but}>
                    <button className={s.prev} data-direction={"prev"} onClick={this.nextSliderHandler.bind(this)}>
                        <FaChevronLeft></FaChevronLeft>
                    </button>
                    <button className={s.next} data-direction={"next"} onClick={this.nextSliderHandler.bind(this)}>
                        <FaChevronRight></FaChevronRight>
                    </button>
                </div>
                <div className={s.images}>
                    <img src={this.state.images[this.state.currentImageIndex]} alt=""/>
                </div>
            </div>
        )
    }
}

export default SliderV1;