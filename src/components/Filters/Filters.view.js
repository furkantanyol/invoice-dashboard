import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import styles from './Filters.styles'
import Button from 'components/Button'
import Subtitle from 'components/Subtitle'
import CardContent from 'components/Card/CardContent'
import Card from 'components/Card'
import Input from 'components/Input'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'
import uiTheme from 'util/theme'
import { noop } from 'util/helpers'

class FiltersView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.filterRoot}>
        <Subtitle text={'Search Filters'}>
          <ExpandMoreIcon className={classes.headerIcon} />
        </Subtitle>
        <Card>
          <CardContent>
            <Input label={'Debtor Name'} placeholder={'Name'} />
            <Input label={'File Number'} placeholder={'Ex: 1, 2, 10'} />
            <Input label={'Document Type'} placeholder={'All'} />
            <Input label={'State'} placeholder={'All'} />
            <Button
              label={'Search'}
              backgroundColor={uiTheme.colors.hazygrey}
              action={noop}
              className={classes.filterButton}
            />
          </CardContent>
        </Card>
      </div>
    )
  }
}

const StyledFiltersView = withStyles(styles)(FiltersView)

export default StyledFiltersView
