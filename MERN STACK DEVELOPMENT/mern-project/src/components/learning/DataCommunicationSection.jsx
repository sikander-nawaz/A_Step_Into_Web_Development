import ExampleSection from '../ui/ExampleSection'
import {
  ParentToChildExample,
  ParentToChildApiExample,
  ChildToParentExample,
  SiblingCommunicationExample,
} from '../../examples'

const DataCommunicationSection = () => {
  return (
    <>
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
    </>
  )
}

export default DataCommunicationSection
