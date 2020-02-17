const ADD_TO_CART = 'ADD_TO_CART';
const ADD_QUANTITY = 'ADD_QUANTITY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';

let initialState = {
    items: [
        {id: 1, dish: 'creme brulee', price: 5.25, description: 'Rich vanilla custard with a caramelised sugar crust', img: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {id: 2, dish: 'assiette de fromages', price: 6.95,  description: 'Caramelised apple tart, vanilla ice cream', img: 'https://images.unsplash.com/photo-1556694795-b6423d3d5b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'},
        {id: 3, dish: 'ice-cream2', price: 13.45,  description: 'French cheese selection, chutney and biscuits', img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {id: 4, dish: 'ice-cream3', price: 13.45,  description: 'Rich vanilla custard with a caramelised sugar crust', img: 'https://images.unsplash.com/photo-1551504734-b464946bb7f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {id: 5, dish: 'ice-cream4', price: 13.45,  description: 'Rich vanilla custard with a caramelised sugar crust', img: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'},
    ],
    addedItems: [],
    total: 0
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let addedItem = state.items.find(item => item.id === action.id);
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.id === item.id);
            if(existed_item){
                addedItem.quantity += 1;
                return {
                    ...state,
                total: Math.floor((state.total + addedItem.price) * 100) / 100
                }
            }
            else{
                addedItem.quantity = 1;
                // calc the total
                let newTotal = state.total + addedItem.price;

                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: Math.floor(newTotal * 100) / 100
                }
            }
        }
        case REMOVE_ITEM: {
            let itemToRemove = state.addedItems.find(item => action.id === item.id);
            let new_items = state.addedItems.filter(item => action.id !== item.id);
            // price
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
            addedItem.quantity +=1;
            let newTotal = state.total + addedItem.price;
            return {
                ...state,
                total: Math.floor(newTotal * 100) / 100
            }
        }
        case SUB_QUANTITY: {
            let addedItem = state.items.find(item => item.id === action.id);
            // if quantity less 0 then removed
            if(addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item => item.id !== action.id);
                let newTotal = state.total - addedItem.price;
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else{
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.price;
                return {
                    ...state,
                    total: Math.floor(newTotal * 100) / 100
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
