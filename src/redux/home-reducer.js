import dish from "../assets/images/home-page-1.jpeg"
import eat_1 from '../assets/images/eat-1.jpg';
import eat_2 from '../assets/images/eat-2.jpg';
import eat_3 from '../assets/images/eat-3.jpg';
import eat_4 from '../assets/images/eat-4.jpg';
import bacon_1 from '../assets/images/bacon--bottom.jpg'
import bacon_2 from '../assets/images/bacon-bottom-2.jpg';


let initialState = {
    homeInfo: {
        header: "Our Story",
        title: "Discover",
        img: dish,
        description: "Rosa is a restaurant, bar and coffee roastery located on a busy corner site in\n" +
            "Farringdon’s Exmouth Market. With glazed frontage on two sides of the\n" +
            "building, overlooking the market and a bustling London intersection.",
        bottom_link: "ABOUT US"
    },
    menu: {
        header: "Menu",
        title: "Discover",
        description: "For those with pure food indulgence in mind, come next door and sate\n" +
            "your desires with our ever changing internationally and seasonally inspired\n" +
            "small plates. We love food, lots of different food, just like you.",
        img1: eat_1,
        img2: eat_2,
        img3: eat_3,
        img4: eat_4,
        bottom_link: "VIEW THE FULL MENU",
    },
    delight: {
        header: "Delight",
        title: "Culinary",
        description: "We promise an intimate and relaxed dining experience that offers\n" +
            "something different to local and foreign patrons and ensures you enjoy a\n" +
            "memorable food experience every time.",
        img_bacon: bacon_1,
        img_bacon2: bacon_2,
        bottom_link: "MAKE A RESERVATION",
    }
};

const homeReducer = (state = initialState, action) => {
    return state;
};

export default homeReducer;