import { connect } from 'react-redux'
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
    incrementCount: () => {
      dispatch(increment())
    },
    decrementCount: () => {
      dispatch(decrement())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CounterComponent)