import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // console.log(this.props.userId);
    // replaced below due to `ownProps`
    // const user = this.props.users.find((user) => user.id === this.props.userId);

    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="header">
        <h4>{user.name}</h4>
      </div>
    );
  }
}

// extact this so UserHeader comp is re-usable

// ownProps = get props from class above.
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);

// testing on loDash.com

// function getUser(id) {
//   fetch(id);
//   return "made a request:" + id;
// }

// getUser(2);

// const memoizedGetUser = _.memoize(getUser);
// memoizedGetUser(3);
