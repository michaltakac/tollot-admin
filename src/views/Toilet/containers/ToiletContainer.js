import { connect } from 'react-redux'
import Toilet from '../components/Toilet'
import { fetchToilet } from '../actions'

const mapStateToProps = state => ({
  toilet: state.toilet.toiletDetail
})

const ToiletContainer = connect(
  mapStateToProps,
  { fetchToilet }
)(Toilet)

export default ToiletContainer
