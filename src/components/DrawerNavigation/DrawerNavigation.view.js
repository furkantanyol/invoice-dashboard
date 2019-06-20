import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from 'components/Layout/Toolbar'
import ToolbarNavigation from 'components/Layout/Toolbar/ToolbarNavigation'
import { withStyles } from '@material-ui/core/styles'
import styles from './DrawerNavigation.styles'

const DrawerNavigationView = ({
  classes,
  open,
  handleDrawerClose,
  handleDrawerOpen
}) => (
  <Drawer
    variant="permanent"
    className={classNames(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open
    })}
    classes={{
      paper: classNames(classes.drawerPaperRoot, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })
    }}
    open={open}
  >
    <ToolbarNavigation
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      handleDrawerClose={handleDrawerClose}
    />

    <Toolbar />
  </Drawer>
)

DrawerNavigationView.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired
}

const StyledDrawerNavigationView = withStyles(styles, { withTheme: true })(
  DrawerNavigationView
)

export default StyledDrawerNavigationView
