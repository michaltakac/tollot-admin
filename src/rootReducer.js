import { combineReducers } from 'redux'
import toiletsReducer from './views/Toilets/reducers'
import toiletReducer from './views/Toilet/reducers'
import settingsReducer from './views/Settings/reducers'

export default combineReducers({
  toilets: toiletsReducer,
  toilet: toiletReducer,
  settings: settingsReducer
})