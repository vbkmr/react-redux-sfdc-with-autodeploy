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
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className={classNames(styles['panel'],styles['panel-default'])}>
        <p>
        {'This is my App!'}
        </p>
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
