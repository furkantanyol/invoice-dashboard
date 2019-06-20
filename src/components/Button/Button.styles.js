import { makeStyles } from '@material-ui/styles'
import color from 'color'

const useStyles = (backgroundColor, fontColor) =>
  makeStyles({
    buttonRoot: {
      padding: '0.5rem 1.5rem',
      backgroundColor: backgroundColor,
      textTransform: 'capitalize',
      boxShadow: 'none',
      color: fontColor,
      fontWeight: 500,
      margin: '0 0.5rem',
      '&:hover': {
        boxShadow: `0 0 6px 0.5px ${backgroundColor}`,
        background: color(backgroundColor)
          .darken(0.075)
          .hex()
      }
    }
  })()

export default useStyles
