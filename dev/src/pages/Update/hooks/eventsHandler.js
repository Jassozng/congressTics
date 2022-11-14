const handleUpdate = (event, id) => { 
    event.preventDefault();
    let newUser = {
        "ID": id,
        "name": event.target["name"].value,
        "surname": event.target["surname"].value,
        "email": event.target["email"].value,
        "twitter": event.target["twitter"].value,
        "avatar": ""
    }

    for(let option in event.target["userAvatar"]){
        event.target["userAvatar"][option].checked ? newUser["avatar"] = event.target["userAvatar"][option].value : null
    }

    localStorage.setItem(`User ${newUser.ID}`, JSON.stringify(newUser));
}

export default handleUpdate