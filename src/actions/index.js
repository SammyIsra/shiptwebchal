const rootUrl = "https://api.github.com";

export const FETCH_USER = "FETCH_USER";

//Fetch the user

export function fetchUser(){
    
    const user = fetch(`${rootUrl}/users/SammyIsra`).then(resp => resp.json());

    return {
        type: FETCH_USER,
        payload: user
    }
}