import React, { Component, PropTypes } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

/***********************************************
a presentational component for displaying table
***********************************************/

class ResultTable extends Component{

  render(){
    return(
        <BootstrapTable data={this.props.tableData} striped={true} hover={true}>
          <TableHeaderColumn isKey={true} dataField="Id"> ID</TableHeaderColumn>
          <TableHeaderColumn dataField="Name">Account name</TableHeaderColumn>
          <TableHeaderColumn dataField="AccountNumber">Account number</TableHeaderColumn>
          <TableHeaderColumn dataField="Phone">Contact</TableHeaderColumn>
          <TableHeaderColumn dataField="AnnualRevenue">Annual revenue</TableHeaderColumn>
        </BootstrapTable>
    )
  }
}

ResultTable.propTypes = {
  tableData : PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default ResultTable
