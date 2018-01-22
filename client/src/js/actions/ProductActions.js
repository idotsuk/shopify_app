export const addProductToFavorites = (id) => {
    return{
        type: 'ADD_FAVORITE',
        id
    }
}
export const removeProductFromFavorites = (id) => {
    return{
        type: 'REMOVE_FAVORITE',
        id
    }
}
export const addProductToFavoritesPending = (id) => {
    return{
        type: 'ADD_FAVORITES_PENDING',
        id
    }
}
export const addProductToFavoritesDone = (id) => {
    return{
        type: 'ADD_FAVORITES_DONE',
        id
    }
}