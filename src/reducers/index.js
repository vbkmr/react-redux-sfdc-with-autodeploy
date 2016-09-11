import { combineReducers } from 'redux'
import {
  TYPE_1
} from '../actions'

/***************************************************************************************
Defines state conversion for each action, later all reducers would be conflated to make store
********************************************************************************************/
function reducer1(state = { }, action) {
  switch (action.type) {
    case TYPE_1:
      break
    default:
        return state
  }
}

function reducer2(state = { }, action) {
  switch (action.type) {
    case TYPE_1:
      break
    default:
        return state
  }
}


const rootReducer = combineReducers({
  reducer1,
  reducer2
})

export default rootReducer
