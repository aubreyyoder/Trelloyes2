import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

describe(`Card component`, () => {
  it(`renders as expected`, () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Card component", () => {
    const tree = renderer
      .create(<Card title="{props.title}" content="{props.content}" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
