import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import IconButton from '@material-ui/core/IconButton'

import styles from './ToolbarNavigation.styles'

class ToolbarNavigationView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    handleDrawerClose: PropTypes.func.isRequired
  }

  render() {
    const { classes, open, handleDrawerOpen, handleDrawerClose } = this.props
    return (
      <div className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() => handleDrawerOpen()}
          className={classNames(classes.menuButton, {
            [classes.hide]: open === true
          })}
        >
          <MenuIcon className={classes.whiteText} />
        </IconButton>
        <IconButton
          onClick={() => handleDrawerClose()}
          className={classNames(classes.menuButton, {
            [classes.hide]: open === false,
            [classes.menuButtonOpen]: open === true
          })}
        >
          <ChevronLeftIcon className={classes.whiteText} />
        </IconButton>
      </div>
    )
  }
}

const StyledToolbarNavigationView = withStyles(styles)(ToolbarNavigationView)

export { StyledToolbarNavigationView }
