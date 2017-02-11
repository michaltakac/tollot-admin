import fetch from "isomorphic-fetch";
import axios from 'axios'

const apiUrl = 'http://pluto.treecom.net:8088/';

export const REQUEST_TOILET = 'REQUEST_TOILET'
export const REQUEST_TOILET_FAILURE = 'REQUEST_TOILET_FAILURE'
export const REQUEST_TOILET_SUCCESS = 'REQUEST_TOILET_SUCCESS'
export const REQUEST_SETTINGS = 'REQUEST_SETTINGS'
export const REQUEST_SETTINGS_FAILURE = 'REQUEST_SETTINGS_FAILURE'
export const REQUEST_SETTINGS_SUCCESS = 'REQUEST_SETTINGS_SUCCESS'
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const UPDATE_SETTINGS_FAILURE = 'UPDATE_SETTINGS_FAILURE'
export const UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS'

function requestToilet() {
  return {
    type: REQUEST_TOILET
  }
}

function requestSettings() {
  return {
    type: REQUEST_SETTINGS
  }
}

function updateSettings() {
  return {
    type: UPDATE_SETTINGS
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

function toiletsFetchSuccess(toilet) {
  return {
    type: REQUEST_TOILET_SUCCESS,
    payload: {
      toilet
    }
  }
}

function settingsFetchError(message) {
  return {
    type: REQUEST_SETTINGS_FAILURE,
    payload: {
      message 
    }
  }
}

function settingsFetchSuccess(settings) {
  return {
    type: REQUEST_SETTINGS_SUCCESS,
    payload: {
      settings
    }
  }
}

function updateSettingsError(message) {
  return {
    type: UPDATE_SETTINGS_FAILURE,
    payload: {
      message 
    }
  }
}

function updateSettingsSuccess(settings) {
  return {
    type: UPDATE_SETTINGS_SUCCESS,
    payload: {
      settings
    }
  }
}

export function fetchToilet(token) {
  return function (dispatch) {
    dispatch(requestToilet())
    return fetch(`${apiUrl}wc/${token}`)
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

export function fetchSettings(token) {
  return function (dispatch) {
    dispatch(requestSettings())
    return fetch(`${apiUrl}wc/${token}`)
      .then(response => {
        if (response.status >= 400) {
          dispatch(settingsFetchError("Bad response from server"));
        }
        const data = response.json();
        return data;
      })
      .then(settings => dispatch(settingsFetchSuccess(settings)));
  };
}

export function setSettings(token, data) {
  return function (dispatch) {
    dispatch(updateSettings())
    return axios({
      method: 'put',
      url: `${apiUrl}wc/${token}`,
      data: {
        banner: data.banner
      },
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 'JCAiSjGefNprusgyRmtN51_CoQUutKOa9cPBu18kDCI'
      }
    })
    .then(response => {
      const data = response.data.data;
      dispatch(updateSettingsSuccess(data));
      window.location.reload()
    })
    .catch(error => dispatch(updateSettingsError(error)));
  };
}