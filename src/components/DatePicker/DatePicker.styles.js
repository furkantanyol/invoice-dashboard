import uiTheme from 'util/theme'
const styles = () => ({
  fechaWrapper: {
    display: 'flex',
    alignItems: 'center',
    background: uiTheme.colors.snowflake,
    borderRadius: '5px',
    padding: '0.5rem',
    color: uiTheme.colors.darkcoal,
    fontWeight: 500,
    maxWidth: '125px'
  },
  dateIcon: {
    fontSize: '18px'
  },
  input: {
    textAlign: 'center !important',
    maxWidth: '85px',
    fontSize: '14px',
    color: uiTheme.colors.darkcoal,
    fontFamily: 'Montserrat',
    '&:before': {
      borderBottom: 'none !important'
    },
    '&:after': {
      borderBottom: 'none'
    }
  },
  root: {
    textAlign: 'center !important'
  }
})

export default styles
