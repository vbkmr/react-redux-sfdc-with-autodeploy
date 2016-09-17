import fetch from 'isomorphic-fetch' //somorphic WHATWG Fetch API

/***************************************************************************************
action types, should be split into a separate module for bigger application
********************************************************************************************/
export const REQUEST_SOQL_ACCDATA = 'REQUEST_SOQL_ACCDATA'
export const RECEIVED_SOQL_ACCDATA = 'RECEIVED_SOQL_ACCDATA'
export const REQUEST_FAILED_SOQL_ACCDATA = 'REQUEST_FAILED_SOQL_ACCDATA'

/***************************************************************************************
Action composers, make actions i.e. a javascript object containing
1. a type
2. asssociated data
********************************************************************************************/
export function requestSOQLAccountData(){
  return{
    type: REQUEST_SOQL_ACCDATA
  }
}

export function receivedRequestSOQLAccountData(response){
  return{
    type: RECEIVED_SOQL_ACCDATA,
    response,
    receivedAt : Date.now()
  }
}

export function failedRequestSOQLAccountData(error){
  return{
    type: REQUEST_FAILED_SOQL_ACCDATA,
    error
  }
}

//Since using thunk action creator, dispatch is also passed to action creator function
export function fetchSOQLAccountData(){

  //request soql query
  dispatch(requestSOQLAccountData())

  //fetching data through Apex remote action
  var queryParams = {} //todo: support more query variables
  return MyReactAppApexController.getSearchedAccounts(JSON.stringify(queryParams), (result,event) =>{
    //console.log(`result: ${JSON.stringify(result)}, event: ${JSON.stringify(event)}`)
    if(event.type == 'exception') {
         dispatch(failedRequestSOQLAccountData(event.message))
     } else {
        console.log(`result: ${JSON.stringify(result)}`)
        dispatch(receivedRequestSOQLAccountData(result))
     }
     if(result == null || result.length == 0){
       dispatch(failedRequestSOQLAccountData('OOPS! No accont records found for the query.'))
     }
  })
}
