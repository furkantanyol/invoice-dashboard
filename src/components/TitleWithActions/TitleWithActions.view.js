import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './TitleWithActions.styles'
import PropTypes from 'prop-types'

const TitleWithActionsView = ({ classes, title, children }) => (
  <div className={classes.titleWithActionsRoot}>
    <p className={classes.title}>{title}</p>
    <div className={classes.buttonGroup}>{children}</div>
  </div>
)

TitleWithActionsView.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

const StyledTitleWithActionsView = withStyles(styles)(TitleWithActionsView)

export default StyledTitleWithActionsView
