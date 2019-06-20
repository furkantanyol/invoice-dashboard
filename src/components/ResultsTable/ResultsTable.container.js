import React from 'react'
import PropTypes from 'prop-types'
import ResultsTableView from './ResultsTable.view'
import { dummyData } from './ResultsTable.data'
import { connect } from 'react-redux'
import {
  updateData,
  setOrdering,
  updateSelected,
  updatePage,
  updateRowsPerPage
} from 'actions'

const mapStateToProps = state => {
  return {
    data: state.resultsTable.data,
    order: state.resultsTable.order,
    orderBy: state.resultsTable.orderBy,
    selected: state.resultsTable.selected,
    page: state.resultsTable.page,
    rowsPerPage: state.resultsTable.rowsPerPage
  }
}

const mapDispatchToProps = dispatch => ({
  updateSelected: selected => dispatch(updateSelected(selected)),
  updatePage: page => dispatch(updatePage(page)),
  updateRowsPerPage: rowsPerPage => dispatch(updateRowsPerPage(rowsPerPage)),
  updateData: data => dispatch(updateData(data)),
  setOrdering: (order, orderBy) => dispatch(setOrdering(order, orderBy))
})

class ResultsTableContainer extends React.Component {
  static propTypes = {
    updateRowsPerPage: PropTypes.func.isRequired,
    updatePage: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    setOrdering: PropTypes.func.isRequired,
    updateSelected: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    selected: PropTypes.array,
    orderBy: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
  }

  static defaultProps = {
    data: [],
    selected: []
  }

  componentDidMount() {
    this.props.updateData(dummyData)
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.props.orderBy === property && this.props.order === 'desc') {
      order = 'asc'
    }
    this.props.setOrdering(order, orderBy)
  }

  handleSelectAllClick = event => {
    const { data } = this.props
    if (event.target.checked) {
      this.props.updateSelected(data.map(n => n.id))
      return
    }
    this.props.updateSelected([])
  }

  handleClick = (event, id) => {
    const { selected } = this.props
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    this.props.updateSelected(newSelected)
  }

  handleChangePage = (event, page) => {
    this.props.updatePage(page)
  }

  handleChangeRowsPerPage = event => {
    this.props.updateRowsPerPage(event.target.value)
  }

  isSelected = id => this.props.selected.indexOf(id) !== -1

  render() {
    return (
      <ResultsTableView
        {...this.props}
        handleSelectAllClick={this.handleSelectAllClick}
        handleRequestSort={this.handleRequestSort}
        isSelected={this.isSelected}
        handleClick={this.handleClick}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        orderBy={this.props.orderBy}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsTableContainer)
