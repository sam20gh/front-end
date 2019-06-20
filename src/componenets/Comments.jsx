import React, { Component } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import CommentForm from "./CommentForm";

class Comments extends Component {
  render() {
    return (
      <Comment.Group>
        <Comment>
          <Comment.Avatar as="a" src="/images/user.png" />
          <Comment.Content>
            <Comment.Author>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>1 day ago</div>
            </Comment.Metadata>
            <Comment.Text>
              <Header as="h3">The hours,</Header>
              <p>
                Preserve until your next run, when the watch lets you see how
                Impermanent your efforts are.
              </p>
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <CommentForm airport={this.props.airport} />
      </Comment.Group>
    );
  }
}

export default Comments;
