import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './Section.styles'
import PropTypes from 'prop-types'

const SectionView = ({ classes, children }) => (
  <div className={classes.sectionRoot}>{children}</div>
)

SectionView.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

const StyledSectionView = withStyles(styles)(SectionView)

export default StyledSectionView
