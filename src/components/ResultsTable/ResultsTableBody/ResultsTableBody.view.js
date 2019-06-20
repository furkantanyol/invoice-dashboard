import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'

import TableRow from '@material-ui/core/TableRow'

import Checkbox from '@material-ui/core/Checkbox'
import { Sort } from 'util/helpers'
import styles from './ResultsTableBody.styles'
import DatePicker from 'components/DatePicker'
import { FormattedNumber } from 'react-intl'

const ResultsTableBody = props => {
  const {
    rowsPerPage,
    page,
    order,
    orderBy,
    data,
    classes,
    handleSelected,
    handleClick
  } = props
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)
  const sortedData = Sort.stableSort(data, orderBy, order)

  return (
    <TableBody>
      {sortedData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(n => {
          const isSelected = handleSelected(n.id)
          return (
            <TableRow
              hover
              role="checkbox"
              // onClick={event => handleClick(event, n.id)} click row to select
              aria-checked={isSelected}
              tabIndex={-1}
              key={n.id}
              selected={isSelected}
              className={classes.row}
              classes={{
                selected: classes.rowSelected
              }}
            >
              <TableCell
                padding="checkbox"
                onClick={event => handleClick(event, n.id)} // click checkbox cell to select
              >
                <Checkbox
                  classes={{
                    checked: classes.checked
                  }}
                  className={classes.checkbox}
                  checked={isSelected}
                />
              </TableCell>
              <TableCell
                className={classes.columnCell}
                component="th"
                scope="row"
                padding="none"
              >
                {n.type}
              </TableCell>
              <TableCell className={classes.columnCell} align="center">
                {n.fileNumber}
              </TableCell>
              <TableCell className={classes.columnCell} align="center">
                {n.debtor}
              </TableCell>
              <TableCell className={classes.columnCell} align="center">
                {n.issue}
              </TableCell>
              <TableCell className={classes.columnCell} align="center">
                <DatePicker
                  selectedDate={n.expiration_date}
                  handleDateChange={() => undefined}
                />
              </TableCell>
              <TableCell className={classes.montoCell} align="center">
                <FormattedNumber
                  value={n.amount}
                  style="currency"
                  currency="USD"
                />
              </TableCell>
            </TableRow>
          )
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 49 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  )
}

ResultsTableBody.propTypes = {
  classes: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSelected: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

const StyledResultsTableBody = withStyles(styles)(ResultsTableBody)

export default StyledResultsTableBody
