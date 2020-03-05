import IMG1 from '../assets/images/blog-img-1.jpg'
import IMG2 from '../assets/images/blog-2-img.jpg'
import IMG3 from '../assets/images/blog-3-img.jpg'
import IMG4 from '../assets/images/blog-4-img.jpg'

let initialState = {
    blogItems: [
        {
            id: Math.random(),
            date: [{
                month: "JUNE",
                day: "1ST",
                year: "2020"
            }],
            img: IMG1,
            title: "CHEESE BRIE\n" + "SANDWICH",
            description: "The key is to buy specific cuts for specific dishes and be\n" +
                "firm with your butcher. Opt for tender cuts from the\n" +
                "inner haunch muscle if.."
        },
        {
            id: Math.random(),
            date: [{
                month: "MAY",
                day: "28ST",
                year: "2020"
            }],
            img: IMG2,
            title: "ROASTED TOMATO\n" + "SOUP",
            description: "The key is to buy specific cuts for specific dishes and be\n" +
                "firm with your butcher. Opt for tender cuts from the\n" +
                "inner haunch muscle if.."
        },
        {
            id: Math.random(),
            date: [{
                month: "MAY",
                day: "27TH",
                year: "2020"
            }],
            img: IMG3,
            title: "CHEESE BRIE\n" + "SANDWICH",
            description: "The key is to buy specific cuts for specific dishes and be\n" +
                "firm with your butcher. Opt for tender cuts from the\n" +
                "inner haunch muscle if.."
        },
        {
            id: Math.random(),
            date: [{
                month: "MAY",
                day: "26ST",
                year: "2020"
            }],
            img: IMG4,
            title: "HOT CEREALS\n" + "BREAKFAST",
            description: "The key is to buy specific cuts for specific dishes and be\n" +
                "firm with your butcher. Opt for tender cuts from the\n" +
                "inner haunch muscle if.."
        },
    ]
};

const blogReducer = (state=initialState, action) => {
    return state;
};

export default blogReducer;