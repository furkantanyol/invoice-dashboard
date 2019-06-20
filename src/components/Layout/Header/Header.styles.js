import uiTheme from 'util/theme'

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    left: '73px',
    boxShadow: uiTheme.shadows.low,
    paddingRight: '73px',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(
      ['left', 'width', 'margin', 'padding'],
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }
    )
  },
  appBarPrimary: {
    backgroundColor: uiTheme.colors.white,
    color: uiTheme.colors.charcoal
  },
  appBarShift: {
    left: '0',
    paddingRight: '0',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(
      ['left', 'width', 'margin', 'padding'],
      {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }
    )
  },
  toolbar: {
    minHeight: '93px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem'
  }
})

export default styles
