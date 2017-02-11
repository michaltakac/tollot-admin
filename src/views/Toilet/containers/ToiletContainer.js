import { connect } from 'react-redux'
import Toilet from '../components/Toilet'
import { fetchToilet, fetchSettings, setSettings } from '../actions'

const mapStateToProps = state => ({
  toilet: state.toilet.toiletDetail,
  settings: state.toilet.settings,
  alarmInterval: state.toilet.alarmInterval,
  waterUsage: state.toilet.waterUsage,
  banner: state.toilet.banner,
})

const ToiletContainer = connect(
  mapStateToProps,
  { fetchToilet, fetchSettings, setSettings }
)(Toilet)

export default ToiletContainer
