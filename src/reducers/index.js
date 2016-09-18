import { combineReducers } from 'redux'
import {
  REQUEST_SOQL_ACCDATA,
  RECEIVED_SOQL_ACCDATA,
  REQUEST_FAILED_SOQL_ACCDATA
} from '../actions/index.js'

/***************************************************************************************
Defines state conversion for each action, later all reducers would be conflated to make store
********************************************************************************************/
function fetchSOQL(state = {
  isFetching : false,
  didInvalidate : false,
  didFail : false,
  failureMessage : '',
  items: []
}, action) {
  switch (action.type) {

    case REQUEST_SOQL_ACCDATA:
      return Object.assign({}, state,{
        isFetching : true,
        didInvalidate : false,
        didFail : false,
        failureMessage : '',
      })

    case RECEIVED_SOQL_ACCDATA:
      return Object.assign({}, state,{
        isFetching : false,
        didInvalidate : false,
        didFail : false,
        failureMessage : '',
        items : action.response
      })

    case REQUEST_FAILED_SOQL_ACCDATA:
      return Object.assign({}, state,{
        isFetching : false,
        didInvalidate : false,
        didFail : true,
        failureMessage : error.message
      })

    default:
        return state
  }
}

/*
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
*/

export default fetchSOQL
//export default rootReducer
