import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import renderer from "react-test-renderer";

describe(`List testing`, () => {
  it(`renders the list without crashing`, () => {
    // Set up props
    const cards = [
      { title: "First card", content: "lorem ipsum" },
      { title: "Second card", content: "lorem ipsum" },
      { title: "Third card", content: "lorem ipsum" }
    ];

    // Execute render
    const tree = renderer
      .create(<List header="Test list" cards={cards} />)
      .toJSON();

    // Evaluate results
    expect(tree).toMatchSnapshot();
  });
});
