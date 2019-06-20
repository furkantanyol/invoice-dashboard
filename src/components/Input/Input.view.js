import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import styles from './Input.styles'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/CloseRounded'
import Paper from '@material-ui/core/Paper'

class InputView extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes, placeholder, label } = this.props
    return (
      <div className={classes.inputRoot}>
        <InputLabel shrink htmlFor="input" className={classes.inputLabel}>
          {label}
        </InputLabel>
        <Paper className={classes.paperRoot} elevation={1}>
          <InputBase className={classes.input} placeholder={placeholder} />
          <IconButton className={classes.iconButton} aria-label={placeholder}>
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </Paper>
      </div>
    )
  }
}

const StyledInputView = withStyles(styles)(InputView)

export default StyledInputView
