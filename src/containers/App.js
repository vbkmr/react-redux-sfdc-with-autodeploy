import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import classNames from 'classnames'
import ResultTable from '../components/ResultTable.js'
import SearchForm from '../components/SearchForm.js'
import { fetchSOQLAccountData } from '../actions/index.js'

/***************************************************************************************
SPA components are defined here, along with their prop types and '{connect}' features i.e.
how the stores' state and dispatch are mapped to the props fo the component
********************************************************************************************/
class App extends Component {
  constructor(props) {
    super(props)
  }

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
    handleFormSubmit : bindActionCreators(fetchSOQLAccountData, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
