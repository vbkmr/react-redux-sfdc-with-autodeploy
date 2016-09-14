import React, { Component, PropTypes } from 'react'
import { Panel, Button } from 'react-bootstrap';

/***********************************************
a presentational component for displaying search form
***********************************************/

class SearchForm extends Component{

  render(){
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

    return(
      <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block onClick={this.props.fetchSOQLBtnClickHandler}>Fetch SOQL data</Button>
     </div>
   )
  }
}

SearchForm.propTypes = {
  fetchSOQLBtnClickHandler : PropTypes.func.isRequired
}

export default SearchForm
