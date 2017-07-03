const rootUrl = "https://api.github.com";

export const FETCH_USER = "FETCH_USER";
export const FETCH_NEW_FOLLOWERS = "FETCH_NEW_FOLLOWERS";
export const FETCH_MORE_FOLLOWERS = "FETCH_MORE_FOLLOWERS";

//Fetch the user
function setUser(userInfo){

    return {
        type: FETCH_USER,
        payload: userInfo
    }
}

//Fetch list of followers
function setUserFollowers(followersList){

    return {
        type: FETCH_NEW_FOLLOWERS,
        payload: followersList
    }
}

function addFollowers(followersList){
    return {
        type: FETCH_MORE_FOLLOWERS,
        payload: followersList
    }
}

export function fetchMoreFollowers(followersUrl, page){
    return (dispatch)=>{
        fetch(`${followersUrl}?page=${page}`).then(resp => resp.json())
        .then(followers => {
            dispatch(addFollowers(followers));            
        });
    }
}

//Fetch all Github data (user and page 1 of followers)
export function fetchGithubData(username){

    return (dispatch) => {
        fetch(`${rootUrl}/users/${username}`).then(resp => resp.json())
        .then(user => {
            dispatch(setUser(user));
            return fetch(user.followers_url).then(resp => resp.json());
        })
        .then(followers => {
            dispatch(setUserFollowers(followers));
        })
        .catch(err => {
            //Handle error
            console.error(err);
        })
    }

}