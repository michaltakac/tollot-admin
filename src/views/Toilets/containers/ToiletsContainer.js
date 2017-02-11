import { connect } from 'react-redux'
import Toilets from '../components/Toilets'
import { fetchToilets } from '../actions'

const mapStateToProps = state => ({
  toilets: state.toilets.toiletsList
})

const ToiletsContainer = connect(
  mapStateToProps,
  { fetchToilets }
)(Toilets)

export default ToiletsContainer
