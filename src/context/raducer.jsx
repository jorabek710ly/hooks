export const initialState = {
    likedItems: [],
    cart: [],
    count: 0
}
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_LIKED_ITEMS":
            if (state.likedItems.some(item => item.id === action.payload.id)) {
                return { ...state, likedItems: state.likedItems.filter(item => item.id !== action.payload.id) };
            } else {
                return { ...state, likedItems: [...state.likedItems, action.payload] };
            }
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            return state;
    }
}