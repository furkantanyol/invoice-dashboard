import uiTheme from 'util/theme'
import color from 'color'
const styles = () => ({
  paperRoot: {
    width: '100%'
  },
  resultsTableRoot: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  resultCount: {
    color: uiTheme.colors.charcoal,
    fontFamily: 'Montserrat',
    fontSize: '20px',
    padding: '1rem 0',
    fontWeight: 500
  },
  tableFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem'
  },
  excelIcon: {
    border: `1px solid ${uiTheme.colors.leafgreen}`,
    borderRadius: '5px',
    padding: '0.25rem',
    maxWidth: '45px',
    cursor: 'pointer',
    '&:hover': {
      background: color(uiTheme.colors.leafgreen)
        .lighten(1.5)
        .hex()
    }
  },
  noResult: {
    margin: '0 auto',
    fontSize: '20px',
    color: uiTheme.colors.charcoal,
    fontFamily: 'Montserrat'
  }
})
export default styles
