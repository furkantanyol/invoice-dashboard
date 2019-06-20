import uiTheme from 'util/theme'

const styles = () => ({
  summaryRoot: {
    width: '100%'
  },
  selectedDocs: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flex: '1',
    margin: '1rem 1rem 1rem 0',
    alignItems: 'center',
    '&:after': {
      right: '-15px',
      width: '1px',
      height: '200px',
      content: '""',
      display: 'block',
      position: 'absolute',
      backgroundColor: uiTheme.colors.hazygrey
    }
  },

  summaryText: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 500
  },
  summaryResult: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '20px'
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '2',
    margin: '1rem',
    alignItems: 'center'
  },
  resultsCard: {
    display: 'flex'
  },

  summaryTotalResult: {}
})

export default styles
