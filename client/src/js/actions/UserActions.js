export const logIn = (id,first_name,last_name) => {
    return{
        type: 'LOG_IN',
        id,
        first_name,
        last_name
    }
}

export const logOut = (id,first_name,last_name) => {
    return{
        type: 'LOG_OUT',
        id,
        first_name,
        last_name
    }
}
