import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'
import ResultTable from '../components/ResultTable.js'
import SearchForm from '../components/SearchForm.js'
import { requestSOQLAccountData,
         receivedRequestSOQLAccountData,
         failedRequestSOQLAccountData,
         fetchSOQLAccountData } from '../actions/index.js'

/***************************************************************************************
SPA components are defined here, along with their prop types and '{connect}' features i.e.
how the stores' state and dispatch are mapped to the props fo the component
********************************************************************************************/
class App extends Component {
  constructor(props) {
    super(props)
    //this.handleRemoteLoginAction = this.handleRemoteLoginAction.bind(this)
    //this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

/*
  handleFormSubmit(){
    var queryParams = {} //todo: support more query variables
    MyReactAppApexController.getSearchedAccounts(JSON.stringify(queryParams), this.handleRemoteLoginAction)
  }

  //HANDLES remote-action return value from Force.com
  handleRemoteLoginAction(result,event){
    //console.log(`result: ${JSON.stringify(result)}, event: ${JSON.stringify(event)}`)
    if(event.type == 'exception') {
         alert(event.message);
     } else {
        console.log(`result: ${JSON.stringify(result)}`)
        this.setState({tableData: JSON.stringify(result), tableMessage: '一覧部 '})
     }
     if(result == null || result.length == 0){
        this.setState({tableData: '',tableMessage: '一覧部 '})
     }
  }
*/

  render() {
    let sampleTableData = [{A: ' VALUE',B: ' VALUE'},{A:'VALUE',B: ' VALUE'}]
    return (
      <div>
        <SearchForm fetchSOQLBtnClickHandler={this.props.handleFormSubmit}/>
        <ResultTable tableData={this.props.tableData}/>
      </div>
    )
  }
}

App.propTypes = {
  handleFormSubmit : PropTypes.func.isRequired,
  tableData : PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

//Store's state is mapped to props
function mapStateToProps(state) {
  const {items} = state
  const tableData = []
  Array.prototype.push.apply(tableData,items)
  return {
    tableData
  }
}

//Store's dispatch is mapped to props here
function mapDispatchToProps(dispatch) {
  return {
    handleFormSubmit : ()=> dispatch(requestSOQLAccountData)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
