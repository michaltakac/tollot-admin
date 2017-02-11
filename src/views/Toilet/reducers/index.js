const initialState = {
  toiletDetail: '',
  settings: '',
  alarmInterval: '',
  waterUsage: '',
  banner: '',
  toiletErrorMessage: '',
  settingsErrorMessage: ''
};

const toiletReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_TOILET_SUCCESS':
      const toiletDetail = action.payload.toilet.data;
      return Object.assign({}, state, { toiletDetail })
    case 'REQUEST_TOILET_FAILURE':
      return Object.assign({}, state, { toiletErrorMessage: action.payload })
    case 'REQUEST_SETTINGS_SUCCESS':
      console.log(action.payload);
      const settings = action.payload.settings.data;
      return Object.assign({}, state, { settings })
    case 'REQUEST_SETTINGS_FAILURE':
      return Object.assign({}, state, { toiletErrorMessage: action.payload })
    case 'UPDATE_SETTINGS_SUCCESS':
      console.log(action.payload);
      const settingsUpdate = action.payload.settings.data;
      return Object.assign({}, state, { settings: settingsUpdate })
    case 'UPDATE_SETTINGS_FAILURE':
      return Object.assign({}, state, { settingsErrorMessage: action.payload })
    default:
      return state
  }
}

export default toiletReducer
