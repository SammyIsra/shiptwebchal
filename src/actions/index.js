const rootUrl = "https://api.github.com";

export const FETCH_USER = "FETCH_USER";
export const FETCH_FRIENDS = "FETCH_FRIENDS";

//Fetch the user
function setUser(userInfo){

    return {
        type: FETCH_USER,
        payload: userInfo
    }
}

//Fetch list of friends
function setUserFriends(friendsList){

    return {
        type: FETCH_FRIENDS,
        payload: friendsList
    }
}

//Fetch all Github data (user and page 1 of friends)
export function fetchGithubData(username){

    return (dispatch) => {
        fetch(`${rootUrl}/users/${username}`).then(resp => resp.json())
        .then(user => {
            dispatch(setUser(user));
            return fetch(user.followers_url).then(resp => resp.json());
        })
        .then(friends => {
            dispatch(setUserFriends(friends));
        })
        .catch(err => {
            //Handle error
            console.error(err);
        })
    }

}