import uiTheme from 'util/theme'

//const styles = theme => ({
const styles = () => ({
  hide: {
    display: 'none !important'
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto'
  },
  menuButtonOpen: {
    margin: 0
  },
  toolbar: {
    minHeight: '93px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px'
  },
  whiteText: {
    color: uiTheme.colors.white
  }
})

export default styles
