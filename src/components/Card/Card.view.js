import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import styles from './Card.styles'

const CardView = ({ classes, children, className }) => (
  <Card className={`${classes.card} ${className ? className : ''}`}>
    {children}
  </Card>
)

CardView.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CardView)
