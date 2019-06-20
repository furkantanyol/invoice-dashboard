const styles = theme => {
  const topPadding = theme.spacing.unit * 12;
  const padding = theme.spacing.unit * 3;
  return {
    root: {
      display: 'flex'
    },
    content: {
      flexGrow: 1,
      padding: `${topPadding}px ${padding}px ${padding}px`,
    },
    contentWrapper: {
      display: 'flex',
      width: '100%'
    },
    listItemIconRoot: {
      marginLeft: '8px'
    },
    halfOpacity: {
      opacity: 0.5
    },
    toolbar: {
      minHeight: '93px'
    },
  }
}

export default styles
