import uiTheme from 'util/theme'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  titleWithActionsRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: '2rem 0'
  },
  title: {
    fontFamily: 'Montserrat',
    color: uiTheme.colors.charcoal,
    fontSize: '28px',
    opacity: 0.3,
    fontWeight: 500
  },
  button: {
    margin: '0 0.5rem'
  },
  buttonGroup: { display: 'flex' }
})

export default styles
