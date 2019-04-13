import UserInfo from './UserInfo';
import { actions } from '../../state/users';
import { connect } from 'react-redux';

const mapStateToProps = ({users}) => ({
  user : users.user
})

const mapDispatchToProps = {
  searchUser: actions.searchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);