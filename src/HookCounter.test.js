import React from "react"
import { mount } from "enzyme"
import HookCounter from "./HookCounter"

describe("<HookCounter />", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<HookCounter />)
    expect(wrapper).toMatchSnapshot()
  })
  it("increase", () => {
    const wrapper = mount(<HookCounter />)
    let plusButton = wrapper.findWhere(node => node.type() === "button" && node.text() === "+1")
    plusButton.simulate("click")

    const number = wrapper.find("h2")
    expect(number.text()).toBe("1")
  })
  it("decrease", () => {
    const wrapper = mount(<HookCounter />)
    let minusButton = wrapper.findWhere(node => node.type() === "button" && node.text() === "-1")
    minusButton.simulate("click")

    const number = wrapper.find("h2")
    expect(number.text()).toBe("-1")
  })
})
