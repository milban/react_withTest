import React from "react"
import Profile from "./Profile"
import Counter from "./Counter"
import HookCounter from "./HookCounter"

function App() {
  return (
    <div>
      <Profile username="milban" name="박준혁" />
      <Counter />
      <HookCounter />
    </div>
  )
}

export default App
