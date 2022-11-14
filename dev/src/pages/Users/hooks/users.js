const getUsersFromLocalStorage = () => {
    var users = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        
    while ( i-- ) {
        users.push( JSON.parse(localStorage.getItem(keys[i])) );
    }

    return users;
}

export default getUsersFromLocalStorage