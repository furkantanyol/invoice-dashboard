import uiTheme from 'util/theme'

const styles = () => ({
  montoCell: {
    fontWeight: 500
  },
  columnCell: {
    color: uiTheme.colors.dust,
    padding: '1.75rem',
    fontSize: '14px'
  },
  row: {
    '&:nth-child(odd)': {
      backgroundColor: uiTheme.colors.lightDust
    }
  },
  checkbox: {
    color: uiTheme.colors.dust
  },
  checked: {
    color: `${uiTheme.colors.parliament} !important`
  },
  rowSelected: {
    background: `${uiTheme.colors.nightfall} !important`
  },
  eventIcon: {
    fontSize: '14px',
    marginLeft: '0.25rem'
  }
})

export default styles
