import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import styles from './ToolbarItem.styles'

class ToolbarItemView extends Component {
  static propTypes = {
    Icon: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
  }

  render() {
    const { Icon, label, classes } = this.props

    return (
      <ListItem button className={classNames(classes.listItemRoot)} key={label}>
        <ListItemIcon className={classes.listItemIconRoot}>
          <Icon
            className={`${classes.icon} ${classes.whiteText} ${
              classes.halfOpacity
            }`}
          />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: `${classes.whiteText} ${classes.halfOpacity}`
          }}
          primary={label}
        />
      </ListItem>
    )
  }
}

const StyledToolbarItemView = withStyles(styles)(ToolbarItemView)

export { StyledToolbarItemView }
