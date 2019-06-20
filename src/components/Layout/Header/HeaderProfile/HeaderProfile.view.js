import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './HeaderProfile.styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

const HeaderProfileView = ({ classes }) => (
  <div className={classes.headerProfileRoot}>
    <ExpandMoreIcon className={classes.headerIcon} />
    <p className={classes.headerText}>Welcome, User</p>
    <IconButton
    // aria-owns={open ? 'menu-appbar' : undefined}
    // aria-haspopup="true"
    // onClick={this.handleMenu}
    // color="inherit"
    >
      <AccountCircleIcon className={classes.headerIconAccount} />
    </IconButton>
  </div>
)

HeaderProfileView.propTypes = {
  classes: PropTypes.object.isRequired
}

const StyledHeaderProfileView = withStyles(styles)(HeaderProfileView)

export { StyledHeaderProfileView }
