import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import useStyles from './Button.styles'

const ButtonView = ({
  backgroundColor,
  fontColor,
  label,
  action,
  className
}) => {
  const classes = useStyles(backgroundColor, fontColor)

  return (
    <Button
      variant="contained"
      onClick={action}
      className={`${classes.buttonRoot} ${className ? className : ''}`}
    >
      {label}
    </Button>
  )
}

ButtonView.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default ButtonView
