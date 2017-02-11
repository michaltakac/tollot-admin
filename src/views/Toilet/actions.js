import fetch from "isomorphic-fetch";

export const REQUEST_TOILET = 'REQUEST_TOILET'
export const REQUEST_TOILET_FAILURE = 'REQUEST_TOILET_FAILURE'
export const REQUEST_TOILET_SUCCESS = 'REQUEST_TOILET_SUCCESS'

function requestToilet() {
  return {
    type: REQUEST_TOILET
  }
}

function toiletsFetchError(message) {
  return {
    type: REQUEST_TOILET_FAILURE,
    payload: {
      message 
    }
  }
}

function toiletsFetchSuccess(toilets) {
  return {
    type: REQUEST_TOILET_SUCCESS,
    payload: {
      toilets
    }
  }
}

export function fetchToilet(token) {
  return function (dispatch) {
    dispatch(requestToilet())
    return fetch(`https://private-anon-3f7b6a1dbe-tollot.apiary-mock.com/wc/${token}`)
      .then(response => {
        if (response.status >= 400) {
          dispatch(toiletsFetchError("Bad response from server"));
        }
        const data = response.json();
        console.log(data);
        return data;
      })
      .then(toilet => dispatch(toiletsFetchSuccess(toilet)));
  };
}
