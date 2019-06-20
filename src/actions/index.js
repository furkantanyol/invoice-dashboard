import { actionTypes } from 'actions/actionTypes'

export const updateData = data => ({
  type: actionTypes.resultsTable.updateData,
  data
})

export const updatePage = page => ({
  type: actionTypes.resultsTable.updatePage,
  page
})

export const updateRowsPerPage = rowsPerPage => ({
  type: actionTypes.resultsTable.updateRowsPerPage,
  rowsPerPage
})

export const updateSelected = selected => ({
  type: actionTypes.resultsTable.updateSelected,
  selected
})

export const setOrdering = (order, orderType) => ({
  type: actionTypes.resultsTable.setOrdering,
  order,
  orderType
})
