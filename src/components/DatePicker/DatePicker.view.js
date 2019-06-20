import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import styles from './DatePicker.styles'
import { MuiPickersUtilsProvider, InlineDatePicker } from 'material-ui-pickers'
import EventNoteIcon from '@material-ui/icons/EventNoteRounded'
import DateFnsUtils from '@date-io/moment'
import moment from 'moment'

class DatePickerView extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedDate: PropTypes.string.isRequired,
    handleDateChange: PropTypes.func.isRequired
  }
  state = { selectedDate: this.props.selectedDate }

  handleDateChange = selectedDate => {
    this.setState({ selectedDate })
  }

  render() {
    const { classes } = this.props
    const { selectedDate } = this.state
    const date =
      typeof selectedDate == 'string'
        ? moment(selectedDate, 'DD/MM/YYYY').toDate()
        : selectedDate
    return (
      <div className={classes.fechaWrapper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <InlineDatePicker
            className={classes.datepickerRoot}
            classes={{
              root: classes.datePickerRoot
            }}
            onlyCalendar
            format={'DD/MM/YYYY'}
            value={date}
            onChange={this.handleDateChange}
            InputProps={{ className: classes.input }}
          />
          <EventNoteIcon className={classes.dateIcon} />
        </MuiPickersUtilsProvider>
      </div>
    )
  }
}

export default withStyles(styles)(DatePickerView)
