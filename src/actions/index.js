const rootUrl = "https://api.github.com";

export const FETCH_USER = "FETCH_USER";
export const FETCH_FRIENDS = "FETCH_FRIENDS";

//Fetch the user

export function fetchUser(username){
    
    const user = fetch(`${rootUrl}/users/${username}`).then(resp => resp.json());

    return {
        type: FETCH_USER,
        payload: user
    }
}

export function fetchFriends(friendsURL){

    const friends = fetch("https://api.github.com/users/SammyIsra/followers").then(resp => resp.json());

    return {
        type: FETCH_FRIENDS,
        payload: friends
    }
}