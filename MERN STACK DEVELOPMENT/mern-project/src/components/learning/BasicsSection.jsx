import ExampleSection from '../ui/ExampleSection'
import {
  CounterExample,
  LoginToggleExample,
  NameInputExample,
} from '../../examples'

const BasicsSection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b-2 border-orange-200 pb-2">
        Part 1 — React Basics (useState)
      </h2>

      <ExampleSection
        number="1"
        title="Counter"
        description="useState to store a number. Buttons call setCount to update state."
        topic="basics"
      >

        <CounterExample />
        
      </ExampleSection>

      <ExampleSection
        number="2"
        title="Login Toggle"
        description="Boolean state + conditional rendering (ternary operator)."
        topic="basics"
      >
        <LoginToggleExample />
      </ExampleSection>

      <ExampleSection
        number="3"
        title="Name Input"
        description="Controlled input — value stored in state via onChange."
        topic="basics"
      >
        <NameInputExample />
      </ExampleSection>
    </>
  )
}

export default BasicsSection
