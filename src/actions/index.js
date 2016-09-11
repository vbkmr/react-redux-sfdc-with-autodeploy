import fetch from 'isomorphic-fetch'

/***************************************************************************************
action types, should be split into a separate module for bigger application
********************************************************************************************/
export const TYPE_1 = 'TYPE_1'

/***************************************************************************************
Action composers, make actions i.e. a javascript object containing
1. a type
2. asssociated data
********************************************************************************************/
export function action_1(data){
  return{
    type: TYPE_1,
    data
  }
}
