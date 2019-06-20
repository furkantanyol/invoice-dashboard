import { actionTypes } from 'actions/actionTypes'
import { getElementIndex, sumMoney } from 'util/helpers'
let reducedSum = 0
let selectedData = []

const initialState = {
  order: 'asc',
  orderBy: 'id',
  selected: selectedData,
  data: [],
  page: 0,
  rowsPerPage: 5,
  totalMoney: reducedSum
}
const resultsTable = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.resultsTable.updateData:
      return {
        ...state,
        data: action.data
      }

    case actionTypes.resultsTable.updatePage:
      return {
        ...state,
        page: action.page
      }

    case actionTypes.resultsTable.updateRowsPerPage:
      return {
        ...state,
        rowsPerPage: action.rowsPerPage
      }

    case actionTypes.resultsTable.updateSelected:
      reducedSum = state.data
        .filter(getElementIndex(action.selected))
        .reduce(sumMoney, 0)

      return {
        ...state,
        selected: action.selected,
        totalMoney: reducedSum
      }

    case actionTypes.resultsTable.setOrdering:
      return {
        ...state,
        order: action.order,
        orderBy: action.orderBy
      }

    default:
      return state
  }
}

export default resultsTable
