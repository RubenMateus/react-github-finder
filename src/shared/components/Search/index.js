import SearchInput from './SearchInput';
import { actions } from '../../state/users';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (inputVal) => dispatch(actions.submitSearch(inputVal))
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);