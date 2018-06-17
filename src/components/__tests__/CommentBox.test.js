import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import { wrap } from "module";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that users can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();

  //http://airbnb.io/enzyme/docs/api/ReactWrapper/prop.html
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});
