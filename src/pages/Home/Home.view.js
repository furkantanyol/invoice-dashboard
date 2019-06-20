import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import withLayout from 'components/Layout/withLayout'
import Section from 'components/Layout/Section'
import Button from 'components/Button'
import Filters from 'components/Filters'
import Summary from 'components/Summary'
import ResultsTable from 'components/ResultsTable'

import uiTheme from 'util/theme'
import { noop } from 'util/helpers'
import TitleWithActions from 'components/TitleWithActions'

import styles from './Home.styles'

const Home = ({ classes }) => (
  <div className={classes.homeRoot}>
    <Section>
      <TitleWithActions title={'Transfer Documents'}>
        <Button
          label={'Sync'}
          backgroundColor={uiTheme.colors.hazygrey}
          action={noop}
        />
        <Button
          label={'Load'}
          backgroundColor={uiTheme.colors.parliament}
          fontColor={uiTheme.colors.white}
          action={noop}
        />
      </TitleWithActions>
    </Section>
    <Section>
      <Filters />
    </Section>
    <Section>
      <Summary />
    </Section>
    <Section>
      <ResultsTable />
    </Section>
  </div>
)

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const HomeWithLayout = withLayout(Home)
const StyledHome = withStyles(styles, { withTheme: true })(HomeWithLayout)

export default StyledHome
