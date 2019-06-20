import { lighten } from '@material-ui/core/styles/colorManipulator'
import uiTheme from 'util/theme'

const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  },
  dateIcon: {
    fontSize: '18px',
    marginLeft: '0.5rem'
  },
  checkbox: {
    color: uiTheme.colors.dust
  },
  checked: {
    color: `${uiTheme.colors.parliament} !important`
  },
  cell: {
    color: uiTheme.colors.charcoal,
    padding: '0 2rem;'
  },
  titleWrapper: { display: 'flex', alignItems: 'center' }
})

export default styles
