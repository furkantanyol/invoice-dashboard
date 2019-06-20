import uiTheme from 'util/theme'

// const drawerWidth = 240
// (theme) =>
const styles = () => ({
  paperRoot: {
    display: 'flex',
    alignItems: 'center',
    height: '43px',
    width: '209px',
    boxShadow: 'none',
    border: '1px solid lightgray'
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  inputLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: uiTheme.colors.charcoal
  },
  iconButton: {
    padding: 10
  },
  closeIcon: {
    fontSize: '18px'
  }
})

export default styles
