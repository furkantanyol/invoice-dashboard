import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import Card from 'components/Card'
import CardContent from 'components/Card/CardContent'
import ResultsTableHead from 'components/ResultsTable/ResultsTableHead'
import ResultsTableBody from 'components/ResultsTable/ResultsTableBody'
import ResultsTablePaginationActions from 'components/ResultsTable/ResultsTablePaginationActions'
import ExcelIcon from 'images/icon-excel.png'

import styles from './ResultsTable.styles'

const ResultsTableView = ({
  classes,
  data,
  selected,
  orderBy,
  order,
  handleSelectAllClick,
  handleRequestSort,
  page,
  rowsPerPage,
  isSelected,
  handleClick,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  if (data.length === 0)
    return (
      <Card>
        <CardContent>
          <p className={classes.noResult}>No results available</p>
        </CardContent>
      </Card>
    )

  return (
    <div className={classes.resultsTableRoot}>
      <p className={classes.resultCount}>{data.length} Results</p>
      <Paper className={classes.paperRoot}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <ResultsTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <ResultsTableBody
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
              data={data}
              handleSelected={isSelected}
              handleClick={handleClick}
            />
          </Table>
        </div>
      </Paper>
      <div className={classes.tableFooter}>
        <div className={classes.iconButton}>
          <img
            src={ExcelIcon}
            alt={'excel-icon'}
            className={classes.excelIcon}
          />
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={ResultsTablePaginationActions}
        />
      </div>
    </div>
  )
}
ResultsTableView.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.arrayOf(PropTypes.number),
  orderBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  isSelected: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired
}

export default withStyles(styles)(ResultsTableView)
