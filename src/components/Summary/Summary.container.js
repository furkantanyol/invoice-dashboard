import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SummaryView from './Summary.view'

const mapStateToProps = state => ({
  totalSelected: state.resultsTable.selected.length,
  totalMoney: state.resultsTable.totalMoney
})

class SummaryContainer extends Component {
  static propTypes = {
    totalSelected: PropTypes.number.isRequired,
    totalMoney: PropTypes.number.isRequired
  }

  render() {
    const { totalSelected, totalMoney } = this.props
    return <SummaryView totalSelected={totalSelected} totalMoney={totalMoney} />
  }
}

export default connect(
  mapStateToProps,
  null
)(SummaryContainer)
