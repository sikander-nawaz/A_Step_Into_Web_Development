import ExampleSection from '../ui/ExampleSection'
import { LayoutExample } from '../../examples'

const ComponentsSection = () => {
  return (
    <>
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
    </>
  )
}

export default ComponentsSection
