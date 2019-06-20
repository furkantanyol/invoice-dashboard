import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from 'components/Button'
import Card from 'components/Card'
import CardContent from 'components/Card/CardContent'
import { FormattedNumber } from 'react-intl'
import uiTheme from 'util/theme'
import styles from './Summary.styles'
import { noop } from 'util/helpers'

const SummaryView = ({ classes, totalSelected, totalMoney }) => (
  <div className={classes.summaryRoot}>
    <Card className={classes.summaryCard}>
      <CardContent className={classes.summaryCardContent}>
        <div className={classes.selectedDocs}>
          <p className={classes.summaryText}> Selected Documents:</p>
          <p className={classes.summaryResult}>{totalSelected}</p>
        </div>
        <div className={classes.summaryTotal}>
          <p className={classes.summaryText}> Total Amount:</p>
          <p className={classes.summaryResult}>
            <FormattedNumber
              value={totalMoney}
              style="currency"
              currency="USD"
            />
          </p>
        </div>
        <Button
          label={'Apply'}
          backgroundColor={uiTheme.colors.algea}
          fontColor={uiTheme.colors.white}
          action={noop}
          className={classes.summaryButton}
        />
      </CardContent>
    </Card>
  </div>
)

SummaryView.propTypes = {
  classes: PropTypes.object.isRequired,
  totalSelected: PropTypes.number.isRequired,
  totalMoney: PropTypes.number.isRequired
}

export default withStyles(styles)(SummaryView)
