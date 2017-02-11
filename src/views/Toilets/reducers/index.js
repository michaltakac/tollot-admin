const initialState = {
  toiletsList: []
};

const toiletsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TEST_SAGA':
      return 'test success'
    case 'REQUEST_TOILETS_SUCCESS':
      const toiletsList = action.payload.toilets.data;
      return Object.assign({}, state, { toiletsList })
    case 'REQUEST_TOILETS_FAILURE':
      return Object.assign({}, state, { errorMessage: action.payload })
    default:
      return state
  }
}

export default toiletsReducer
