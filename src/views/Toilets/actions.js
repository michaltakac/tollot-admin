import fetch from "isomorphic-fetch";

export const REQUEST_TOILETS = 'REQUEST_TOILETS'
export const REQUEST_TOILETS_FAILURE = 'REQUEST_TOILETS_FAILURE'
export const REQUEST_TOILETS_SUCCESS = 'REQUEST_TOILETS_SUCCESS'

export const testSaga = () => ({
  type: 'TEST_SAGA'
})

export const testSagaSuccess = () => ({
  type: 'TEST_SAGA_SUCCESS'
})

function requestToilets() {
  return {
    type: REQUEST_TOILETS
  }
}

function toiletsFetchError(message) {
  return {
    type: REQUEST_TOILETS_FAILURE,
    payload: {
      message 
    }
  }
}

function toiletsFetchSuccess(toilets) {
  return {
    type: REQUEST_TOILETS_SUCCESS,
    payload: {
      toilets
    }
  }
}

export function fetchToilets() {
  return function (dispatch) {
    dispatch(requestToilets())
    return fetch(`http://pluto.treecom.net:8088/wc`)
      .then(response => {
        if (response.status >= 400) {
          dispatch(toiletsFetchError("Bad response from server"));
        }
        const data = response.json();
        console.log(data);
        return data;
      })
      .then(toilets => dispatch(toiletsFetchSuccess(toilets)));
  };
}
