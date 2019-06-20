import React from 'react'
import List from '@material-ui/core/List'
import ToolbarItem from 'components/Layout/Toolbar/ToolbarItem'
import toolbarElements from './Toolbar.data'

const ToolbarView = () => (
  <List>
    {toolbarElements.map((toolbarElement, i) => (
      <ToolbarItem
        key={i}
        Icon={toolbarElement.icon}
        label={toolbarElement.label}
      />
    ))}
  </List>
)

export default ToolbarView
