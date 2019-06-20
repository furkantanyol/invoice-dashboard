import React from 'react'
import PropTypes from 'prop-types'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import styles from './CardContent.styles'

const CardContentView = ({ classes, children, className }) => (
  <CardContent
    className={`${classes.cardContent} ${className ? className : ''}`}
  >
    {children}
  </CardContent>
)

CardContentView.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardContentView)
