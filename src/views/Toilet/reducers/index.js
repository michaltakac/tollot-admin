const initialState = {
  toiletDetail: []
};

const toiletReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_TOILETS_SUCCESS':
      console.log(action.payload);
      const toiletDetail = action.payload.toilets.data;
      return Object.assign({}, state, { toiletDetail })
    case 'REQUEST_TOILETS_FAILURE':
      return Object.assign({}, state, { errorMessage: action.payload })
    default:
      return state
  }
}

export default toiletReducer
