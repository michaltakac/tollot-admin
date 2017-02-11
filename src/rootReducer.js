import { combineReducers } from 'redux'
import toiletsReducer from './views/Toilets/reducers'
import toiletReducer from './views/Toilet/reducers'
import analyticsReducer from './views/Analytics/reducers'
//import settingsReducer from './views/Settings/reducers'

export default combineReducers({
  toilets: toiletsReducer,
  toilet: toiletReducer,
  analytics: analyticsReducer,
  //settings: settingsReducer
})