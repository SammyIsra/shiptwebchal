import * as types from './types';

const rootUrl = "https://api.github.com";


//Fetch the user
function setUser(userInfo){

    return {
        type: types.FETCH_USER,
        payload: userInfo
    }
}

//Set list of followers
function setUserFollowers(followersList){

    return {
        type: types.FETCH_NEW_FOLLOWERS,
        payload: followersList
    }
}

//Add a list of new followers
function addFollowers(followersList){
    return {
        type: types.FETCH_MORE_FOLLOWERS,
        payload: followersList
    }
}

//Fetch more folllowers to our list
export function fetchMoreFollowers(followersUrl, page){
    return (dispatch)=>{
        fetch(`${followersUrl}?page=${page}`).then(resp => resp.json())
        .then(followers => {
            dispatch(addFollowers(followers));            
        });
    }
}

//Fetch all Github data (user info and page 1 of followers)
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