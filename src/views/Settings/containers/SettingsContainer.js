import { connect } from 'react-redux'
import Settings from '../components/Settings'
//import { fetchToilet } from '../actions'

const mapStateToProps = state => ({
  //toilet: state.toilet.toiletDetail
})

const SettingsContainer = connect(
  mapStateToProps,
  //{ fetchToilet }
)(Settings)

export default SettingsContainer
