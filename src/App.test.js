import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find('[data-test="component-app"]');
  expect(appComponent.length).toBe(1);
});

test("checking state in App", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().count).toBe(0);
  expect(wrapper.state().randomText.length).toBe(0);
});

test("render title correctly", () => {
  const wrapper = shallow(<App />);
  const pageTitle = wrapper.find('[data-test="display-title"]');
  expect(pageTitle.text()).toBe("Lorem Ipsum Generator");
});

test("submiting form", () => {
  const wrapper = shallow(<App />);

  const formEventMocked = { preventDefault: jest.fn() };

  wrapper.find("form").simulate("submit", formEventMocked);
  expect(formEventMocked.preventDefault).toBeCalledTimes(1);
});

test("Updates the state", () => {
  const wrapper = shallow(<App />);
  const input = wrapper.find('[data-test="onChange-value"]');
  input.simulate("change", { target: { value: 2 } });
  expect(wrapper.state().count).toEqual(2); // SUCCESS
});
