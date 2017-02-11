import axios from "axios";

export const REQUEST_ANALYTICS = 'REQUEST_ANALYTICS'
export const REQUEST_ANALYTICS_FAILURE = 'REQUEST_ANALYTICS_FAILURE'
export const REQUEST_ANALYTICS_SUCCESS = 'REQUEST_ANALYTICS_SUCCESS'

function requestAnalytics() {
  return {
    type: REQUEST_ANALYTICS
  }
}

function analyticsFetchError(message) {
  return {
    type: REQUEST_ANALYTICS_FAILURE,
    payload: {
      message 
    }
  }
}

function analyticsFetchSuccess(data) {
  return {
    type: REQUEST_ANALYTICS_SUCCESS,
    payload: {
      data
    }
  }
}

/*export function fetchAnalytics(query) {
  return function (dispatch) {
    dispatch(requestAnalytics())
    
    return fetch(`http://pluto.treecom.net:8088/reports/${query}`)
      .then(response => {
        if (response.status >= 400) {
          dispatch(analyticsFetchError("Bad response from server"));
        }
        const data = response;
        console.log(data);
        return data;
      })
      .then(toilet => dispatch(analyticsFetchSuccess(toilet)));
  };
}*/

export function fetchAnalytics(query) {
  return function (dispatch) {
    dispatch(requestAnalytics())

    return axios({
      method: 'get',
      url: `http://pluto.treecom.net:8088/reports/${query}`,
      headers: {
        'X-Auth-Token': 'JCAiSjGefNprusgyRmtN51_CoQUutKOa9cPBu18kDCI'
      }
    })
    .then(response => {
      console.log(response);
      const data = response.data.data;
      dispatch(analyticsFetchSuccess(data));
    })
    .catch(error => dispatch(analyticsFetchError(error)));
  };
}
