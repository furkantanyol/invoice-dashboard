import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import OutboundLink from 'components/OutboundLink'
import styles from './HeaderLogo.styles'
import PropTypes from 'prop-types'

const HeaderLogoView = ({ classes, className, imageUrl, link, ...rest }) => (
  <OutboundLink to={link} aria-label={`${rest['aria-label'] || 'HeaderLogo'}`}>
    <img
      src={imageUrl}
      alt={'header-logo'}
      className={`${classes.logo} ${className}`}
    />
  </OutboundLink>
)

HeaderLogoView.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

HeaderLogoView.defaultProps = {
  className: ''
}

const StyledHeaderLogoView = withStyles(styles)(HeaderLogoView)

export { StyledHeaderLogoView }
