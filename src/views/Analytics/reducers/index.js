const initialState = {
  analyticsData: ''
};

const analyticsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_ANALYTICS_SUCCESS':
      const analyticsData = action.payload.data;
      return Object.assign({}, state, { analyticsData })
    case 'REQUEST_ANALYTICS_FAILURE':
      return Object.assign({}, state, { errorMessage: action.payload })
    default:
      return state
  }
}

export default analyticsReducer
