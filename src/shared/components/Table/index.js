
import { connect } from 'react-redux';
import Table from './Table';

const mapStateToProps = (state) => {
  return {
    data: state.users.list.map(user => {
      console.log(user);
      return {
        key: user.id,
        image_url : user.avatar_url,
        info: {
          name: user.login,
          link: user.html_url
        },
        score: user.score,
        moreInfo: user.login
      };
    })
  };
};

export default connect(mapStateToProps)(Table);