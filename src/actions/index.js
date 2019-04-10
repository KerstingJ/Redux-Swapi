// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_CHARACTERS_PENDING = "FETCHING_CHARACTERS_PENDING";
export const FETCHING_CHARACTERS_SUCCESS = "FETCHING_CHARACTERS_SUCCESS";
export const FETCHING_CHARACTERS_FAILURE = "FETCHING_cHARACTERS_FAILURE";
// // //  FETCHING_CHARACTERS_PENDING, FETCHING_CHARACTERS_SUCCESS, FETCHING_CHARACTERS_FAILURE

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const actionCreator = () => dispatch => {
    dispatch({type: FETCHING_CHARACTERS_PENDING})
    console.log("in action Creator")
    axios
        .get('https://swapi.co/api/people')
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCHING_CHARACTERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCHING_CHARACTERS_FAILURE, payload: "You Done Fricked Up!\nwell probably just bad internet tbh\nWe couldnt get the list"})
        })
}