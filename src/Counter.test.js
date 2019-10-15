import React from "react"
import { shallow } from "enzyme"
import Counter from "./Counter"

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper).toMatchSnapshot()
  })
  it("has initial number", () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper.state().number).toBe(0)
  })
  it("increases", () => {
    const wrapper = shallow(<Counter />)
    wrapper.instance().handleIncrease()
    expect(wrapper.state().number).toBe(1)
  })
  it("decrease", () => {
    const wrapper = shallow(<Counter />)
    wrapper.instance().handleDecrease()
    expect(wrapper.state().number).toBe(-1)
  })
  it("calls handleIncrease", () => {
    const wrapper = shallow(<Counter />)
    let plusButton = wrapper.findWhere(node => node.type() === "button" && node.text() === "+1")
    plusButton.simulate("click")
    expect(wrapper.state().number).toBe(1)
  })
  it("calls handleDecrease", () => {
    const wrapper = shallow(<Counter />)
    let minusButton = wrapper.findWhere(node => node.type() === "button" && node.text() === "-1")
    minusButton.simulate("click")
    expect(wrapper.state().number).toBe(-1)
  })
})
