const ADD_TO_CART = 'ADD_TO_CART';
const ADD_QUANTITY = 'ADD_QUANTITY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';

let initialState = {
    items: [
        {
            id: 1,
            dish: 'creme brulee',
            price: 5.25,
            description: 'Rich vanilla custard with a caramelised sugar crust',
            img: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            header_title:  'Mains'
        },
        {
            id: 2,
            dish: 'assiette de fromages',
            price: 6.95,
            description: 'Caramelised apple tart, vanilla ice cream',
            img: 'https://images.unsplash.com/photo-1556694795-b6423d3d5b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        },
        {
            id: 3,
            dish: 'CURRY-TAMARILLOR',
            price: 7.95,
            description: 'Cornish mackerel, marinated tomatoes, fragrant curry, tamarillo',
            img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
        {
            id: 4,
            dish: 'CORNISH-MACKEREL',
            price: 10.45,
            description: 'Baked salmon fillet, hollandaise sauce, rosemary salt potatoes',
            img: 'https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },

        {
            id: 11,
            dish: 'CREME BRULEE',
            price: 5.25,
            description: 'Rich vanilla custard with a caramelised sugar crust',
            img: 'https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            header_title:  'Mains'
        },
        {
            id: 12,
            dish: 'TARTE TATIN',
            price: 5.95,
            description: 'Caramelised apple tart, vanilla ice cream',
            img: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
            id: 13,
            dish: 'ASSIETTE DE FROMAGES',
            price: 6.95,
            description: 'French cheese selection, chutney and biscuits',
            img: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
            id: Math.random(),
            dish: 'SEA-TROUT',
            price: 26.95,
            description: 'Roast Trout, English asparagus, Jersey Royals, watercress',
            img: 'https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
        {
            id: Math.random(),
            dish: 'FILET DE SAUMON',
            price: 13.95,
            description: 'Baked salmon fillet, hollandaise sauce, rosemary salt potatoes',
            img: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            header_title:  'Mains'
        },
        {
            id: Math.random(),
            dish: 'CONFIT DE CANARD',
            price: 12.15,
            description: 'Duck confit, white bean & ham cassoulet, wilted spinach',
            img: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
            id: Math.random(),
            dish: 'POULET CORDON BLEU',
            price: 13.95,
            description: 'Paupiette of chicken, blue cheese & ham, rosemary salt  and beans',
            img: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
    ],
    desserts: [
        {
            id: Math.random(),
            dish: 'creme brulee',
            price: 5.25,
            description: 'Rich vanilla custard with a caramelised sugar crust',
            img: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
        {
            id: Math.random(),
            dish: 'creme brulee',
            price: 5.25,
            description: 'Rich vanilla custard with a caramelised sugar crust',
            img: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
        {
            id: Math.random(),
            dish: 'creme brulee',
            price: 5.25,
            description: 'Rich vanilla custard with a caramelised sugar crust',
            img: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
        {
            id: Math.random(),
            dish: 'creme brulee',
            price: 5.25,
            description: 'Rich vanilla custard with a caramelised sugar crust',
            img: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
    ],
    addedItems: [],
    total: 0,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let addedItem = state.items.find(item => item.id === action.id);
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.id === item.id);
            if (existed_item) {
                addedItem.quantity += 1;
                console.log(addedItem);

                let newTotal = parseFloat(state.total.toString());
                newTotal = (newTotal + parseFloat(addedItem.price.toString())).toFixed(2);

                // newTotal = newTotal.toString();
                // const decimal = newTotal.indexOf('.');
                // const asdqwe = newTotal.slice(0, decimal + 2);

                return {
                    ...state,
                    // total: parseFloat(state.total.toFixed(2)) + parseFloat(addedItem.price.toFixed(2))
                    total: newTotal
                        // Math.floor((state.total + addedItem.price) * 100) / 100
                }
            } else {
                addedItem.quantity = 1;
                // calc the total

                let newTotal = parseFloat(state.total.toString());
                newTotal = (newTotal + parseFloat(addedItem.price.toString())).toFixed(2);
                console.log(newTotal);

                // let handlePrice = newTotal => {
                //     newTotal += addedItem.price;
                //     if (newTotal === null || newTotal === '' || newTotal === undefined) { return '' }
                //     let handle = newTotal.toString().replace(/[^\d.]/g, '');
                //     handle = handle.slice(0, handle.indexOf('.') >= 0 ? handle.indexOf('.') + 3 : undefined);
                //     return handle;
                // };

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        }
        case REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find(item => action.id === item.id);
            let new_items = state.addedItems.filter(item => action.id !== item.id);

            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
            console.log(itemToRemove);
            return {
                ...state,
                addedItems: new_items,
                total: Math.ceil(newTotal * 100) / 100
            }
        }
        case ADD_QUANTITY: {
            let addedItem = state.items.find(item => item.id === action.id);
            addedItem.quantity += 1;


            let newTotal = parseFloat(state.total.toString());
            newTotal = (newTotal + parseFloat(addedItem.price.toString())).toFixed(2);
            // let newTotal = state.total + addedItem.price;
            return {
                ...state,
                total: newTotal
            }
        }
        case SUB_QUANTITY: {
            let addedItem = state.items.find(item => item.id === action.id);
            // if quantity less 0 then removed
            if (addedItem.quantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.id);
                // let newTotal = state.total - addedItem.price;

                let newTotal = parseFloat(state.total.toString());
                newTotal = (newTotal - parseFloat(addedItem.price.toString())).toFixed(2);

                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            } else {
                addedItem.quantity -= 1;
                // let newTotal = state.total - addedItem.price;
                let newTotal = parseFloat(state.total.toString());
                newTotal = (newTotal - parseFloat(addedItem.price.toString())).toFixed(2);

                return {
                    ...state,
                    total: newTotal
                }
            }
        }
        default:
            return state;
    }
};

export const addToCart = (id) => ({type: ADD_TO_CART, id});
export const removeItem = (id) => ({type: REMOVE_ITEM, id});


export const addQuantity = (id) => ({type: ADD_QUANTITY, id});
export const subtractQuantity = (id) => ({type: SUB_QUANTITY, id});


export default menuReducer;
