import React from 'react'
import Header from 'components/Layout/Header'
import DrawerNavigation from 'components/DrawerNavigation'
import PropTypes from 'prop-types'
import styles from './Layout.styles'
import { withStyles } from '@material-ui/core/styles'

function withLayout(WrappedComponent) {
  return withStyles(styles)(
    class Layout extends React.Component {
      static propTypes = {
        classes: PropTypes.object.isRequired
      }

      state = {
        open: false
      }

      handleDrawerOpen = () => {
        this.setState({ open: true })
      }

      handleDrawerClose = () => {
        this.setState({ open: false })
      }

      render() {
        const { classes } = this.props
        const { open } = this.state
        return (
          <div className={classes.root}>
            <DrawerNavigation
              open={open}
              handleDrawerClose={this.handleDrawerClose}
              handleDrawerOpen={this.handleDrawerOpen}
            />
            <Header open={open} />

            <div className={classes.contentWrapper}>
              <main className={classes.content}>
                <WrappedComponent {...this.props} />
              </main>
            </div>
          </div>
        )
      }
    }
  )
}

export default withLayout
