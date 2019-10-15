import React from "react"
//import { mount } from "enzyme"
import { render, fireEvent } from "@testing-library/react"
import HookCounter from "./HookCounter"

describe("<HookCounter />", () => {
  it("matches snapshot", () => {
    const utils = render(<HookCounter />)
    expect(utils.container).toMatchSnapshot()
  })
  it("has a number and two buttons", () => {
    const utils = render(<HookCounter />)
    utils.getByText("0")
    utils.getByText("+1")
    utils.getByText("-1")
  })
  it("increase", () => {
    const utils = render(<HookCounter />)
    const number = utils.getByText("0")
    const plusButton = utils.getByText("+1")

    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    expect(number).toHaveTextContent("2")
    expect(number.textContent).toBe("2")
  })
  it("decrease", () => {
    const utils = render(<HookCounter />)
    const number = utils.getByText("0")
    const minusButton = utils.getByText("-1")

    fireEvent.click(minusButton)
    fireEvent.click(minusButton)
    expect(number).toHaveTextContent("-2")
  })
})

// describe("<HookCounter />", () => {
//   it("matches snapshot", () => {
//     const wrapper = mount(<HookCounter />)
//     expect(wrapper).toMatchSnapshot()
//   })
//   it("increase", () => {
//     const wrapper = mount(<HookCounter />)
//     let plusButton = wrapper.findWhere(node => node.type() === "button" && node.text() === "+1")
//     plusButton.simulate("click")

//     const number = wrapper.find("h2")
//     expect(number.text()).toBe("1")
//   })
//   it("decrease", () => {
//     const wrapper = mount(<HookCounter />)
//     let minusButton = wrapper.findWhere(node => node.type() === "button" && node.text() === "-1")
//     minusButton.simulate("click")

//     const number = wrapper.find("h2")
//     expect(number.text()).toBe("-1")
//   })
// })
