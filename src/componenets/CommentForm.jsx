import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import API from "../API";

const options = [
  { key: "1", text: "Very Bad", value: "1" },
  { key: "2", text: "Bad", value: "2" },
  { key: "3", text: "Not Good", value: "3" },
  { key: "4", text: "Very good", value: "4" },
  { key: "5", text: "Fantastic", value: "5" }
];

class CommentForm extends Component {
  state = {
    title: "",
    content: "",
    rating: ""
  };

  handleSubmit = event => {
    let comment = {
      title: this.state.title,
      content: this.state.content,
      rating: this.state.rating,
      airport: this.props.airport
    };
    API.comment(comment).then(data => {
      if (data.error) {
        alert(`Didn't work!: ${data.error}`);
      } else {
        event.preventDefault();
        alert(`Comment succeffuly added `);
        this.setState({ title: "", content: "", rating: "" });
      }
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  numberRating = option => {
    if (option === "Fantastic") {
      return 5;
    } else if (option === "Very Good") {
      return 4;
    } else if (option === "Not Good") {
      return 3;
    } else if (option === "Bad") {
      return 2;
    } else if (option === "Very Bad") {
      return 1;
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            name="rating"
            options={options}
            placeholder="Rating"
            onChange={event => {
              this.setState({
                rating: this.numberRating(event.target.innerText)
              });
            }}
          />
        </Form.Group>
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            name="title"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.TextArea
          label="About"
          placeholder="Tell us more about you..."
          name="content"
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default CommentForm;
