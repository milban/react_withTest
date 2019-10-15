import React from "react"
//import { mount } from "enzyme"
import { render } from "@testing-library/react"
import Profile from "./Profile"

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="milban" name="박준혁" />)
    expect(utils.container).toMatchSnapshot()
  })
  it("shows the props correctly", () => {
    const utils = render(<Profile username="milban" name="박준혁" />)
    utils.getByText("milban")
    utils.getByText("(박준혁)")
    utils.getByText(/박/)
  })
})

// describe("<Profile />", () => {
//   it("matches spanpshot", () => {
//     const wrapper = mount(<Profile username="milban" name="박준혁" />)
//     expect(wrapper).toMatchSnapshot()
//   })
//   it("renders username and name", () => {
//     const wrapper = mount(<Profile username="milban" name="박준혁" />)

//     expect(wrapper.props().username).toBe("milban")
//     expect(wrapper.props().name).toBe("박준혁")

//     const boldElement = wrapper.find("b")
//     expect(boldElement.contains("milban")).toBe(true)
//     const spanElement = wrapper.find("span")
//     expect(spanElement.text()).toBe("(박준혁)")
//   })
// })
