import React, { Component } from "react";

export default ChildComponent => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }

  return ComposedComponent;
};

// Imagine we are in CommentBox.js
