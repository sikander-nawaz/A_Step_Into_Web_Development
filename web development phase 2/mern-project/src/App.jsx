import ExampleSection from './components/ui/ExampleSection'
import {
  CounterExample,
  LoginToggleExample,
  NameInputExample,
  LayoutExample,
  ParentToChildExample,
  ParentToChildApiExample,
  ChildToParentExample,
  SiblingCommunicationExample,
} from './examples'

function App() {
  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">React Learning Project</h1>
        <p className="text-gray-500 mt-2">MERN Phase 2 — All examples in one place</p>
      </header>

      {/* ── PART 1: React Basics (useState) ── */}
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

      {/* ── PART 2: Components ── */}
      <h2 className="text-2xl font-bold text-teal-600 mb-4 border-b-2 border-teal-200 pb-2 mt-10">
        Part 2 — Reusable Components
      </h2>

      <ExampleSection
        number="4"
        title="Layout (Navbar + Hero)"
        description="Break UI into separate component files and compose them together."
        topic="components"
      >
        <LayoutExample />
      </ExampleSection>

      {/* ── PART 3: Data Communication ── */}
      <h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-200 pb-2 mt-10">
        Part 3 — Data Communication
      </h2>

      <ExampleSection
        number="5"
        title="Parent → Child (Props)"
        description="Parent passes count and student data down to child components via props."
        topic="data-communication"
      >
        <ParentToChildExample />
      </ExampleSection>

      <ExampleSection
        number="6"
        title="Parent → Child (API + useEffect)"
        description="Parent fetches data from an API, then passes each item to a child UserCard."
        topic="data-communication"
      >
        <ParentToChildApiExample />
      </ExampleSection>

      <ExampleSection
        number="7"
        title="Child → Parent (Callback)"
        description="Parent passes a function to child. Child calls it to send data back up."
        topic="data-communication"
      >
        <ChildToParentExample />
      </ExampleSection>

      <ExampleSection
        number="8"
        title="Sibling ↔ Sibling (Lifted State)"
        description="Shared state lives in parent. One sibling updates it, the other reads it."
        topic="data-communication"
      >
        <SiblingCommunicationExample />
      </ExampleSection>
    </div>
  )
}

export default App
