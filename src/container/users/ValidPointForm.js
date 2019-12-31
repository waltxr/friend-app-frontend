import { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentGroup: state.app.currentGroup
  }
}

export default connect(mapStateToProps, { })(ValidPointForm)
