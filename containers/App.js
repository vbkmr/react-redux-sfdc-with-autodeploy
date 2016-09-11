import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames'
import styles from '../resources/bootstrap/css/bootstrap.min.css'

/***************************************************************************************
SPA components are defined here, along with their prop types and '{connect}' features i.e.
how the stores' state and dispatch are mapped to the props fo the component
********************************************************************************************/
class App extends Component {
  constructor(props) {
    super(props)
    this.handleRemoteLoginAction = this.handleRemoteLoginAction.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({tableData: '', tableMessage: '一覧部 '})
  }

  componentWillReceiveProps(nextProps) {
  }

  handleFormSubmit(){
    var queryParams = {}
    MyReactAppApexController.getSearchedAccounts(JSON.stringify(queryParams), this.handleRemoteLoginAction)
  }

  //HANDLES remote-action return value from Force.com
  handleRemoteLoginAction(result,event){
    //console.log(`result: ${JSON.stringify(result)}, event: ${JSON.stringify(event)}`)
    if(event.type == 'exception') {
         alert(event.message);
     } else {
        //console.log(`result: ${JSON.stringify(result)}`)
        this.setState({tableData: result, tableMessage: '一覧部 '})
     }
     if(result == null || result.length == 0){
        this.setState({tableData: '',tableMessage: '一覧部 '})
     }
  }

  render() {
    let tableData
    if(this.state.tableData === '')
       tableData = 'No records to display.'
    else tableData = this.state.tableData
    return (
      <div>
        <form className={styles['form-horizontal']} onSubmit={this.handleFormSubmit}>
          <div className={classNames(styles['panel'],styles['panel-default'])}>
            <p>Fetch my Salesforce data app</p>
            <div className={classNames(styles['col-sm-offset-2'],styles['col-sm-8'])}>
              <button  type="submit" className={classNames(styles['btn'],styles['btn-block'],styles['btn-primary'])}>Fetch SOQL data</button>
            </div>
            {tableData}
          </div>
        </form>
      </div>
    )
  }
}

App.propTypes = {
}

//Store's state is mapped to props
function mapStateToProps(state) {
  return {
  }
}

//Store's dispatch is mapped to props here
function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
