import React from 'react'
import PropTypes from 'prop-types'

const OutboundLink = ({ to, newWindow, children, ...rest }) => {
  const attributes = {
    href: to,
    ...rest
  }

  if (newWindow) {
    attributes.target = '_blank'
    attributes.rel = 'noopener noreferrer'
  }

  return <a {...attributes}>{children}</a>
}

OutboundLink.propTypes = {
  to: PropTypes.string.isRequired,
  newWindow: PropTypes.bool,
  children: PropTypes.node
}

OutboundLink.defaultProps = {
  newWindow: true
}

export { OutboundLink }
