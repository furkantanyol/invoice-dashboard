import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import styles from './Subtitle.styles'

class SubtitleView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    text: PropTypes.string.isRequired
  }

  render() {
    const { classes, children, text } = this.props
    return (
      <div className={classes.title}>
        <p className={classes.titleText}>{text}</p>
        {children}
      </div>
    )
  }
}

const StyledSubtitleView = withStyles(styles)(SubtitleView)

export default StyledSubtitleView
