import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment } from '../../actions/counter'
import CounterComponent from './CounterComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter.count,
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: bindActionCreators(increment, dispatch),
    decrementCount: bindActionCreators(decrement, dispatch)
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CounterComponent)