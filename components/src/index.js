import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
        <div>Are you sure?!</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="First person / users"
          timeAgo="Today 16:45"
          userAvatar={faker.image.avatar()}
          commentText={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today 14:30"
          userAvatar={faker.image.avatar()}
          commentText={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          timeAgo="Today 13:01"
          userAvatar={faker.image.avatar()}
          commentText={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
