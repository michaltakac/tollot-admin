import { connect } from 'react-redux'
import Analytics from '../components/Analytics'
import { fetchAnalytics } from '../actions'

const mapStateToProps = state => ({
  analytics: state.analytics.analyticsData,
})

const AnalyticsContainer = connect(
  mapStateToProps,
  { fetchAnalytics }
)(Analytics)

export default AnalyticsContainer
