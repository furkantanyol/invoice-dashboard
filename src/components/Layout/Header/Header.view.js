import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import HeaderProfile from 'components/Layout/Header/HeaderProfile'
import styles from './Header.styles'
import HeaderLogo from 'components/Layout/Header/HeaderLogo'
import HeaderLogoImage from 'images/header-logo.jpg'

class HeaderView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired
  }

  render() {
    const { classes, open } = this.props
    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}
        classes={{
          colorPrimary: classes.appBarPrimary
        }}
      >
        <Toolbar className={classNames(classes.toolbar)} disableGutters={!open}>
          <HeaderLogo imageUrl={HeaderLogoImage} link={'/'} />
          <HeaderProfile />
        </Toolbar>
      </AppBar>
    )
  }
}

const StyledHeaderView = withStyles(styles)(HeaderView)

export { StyledHeaderView }
