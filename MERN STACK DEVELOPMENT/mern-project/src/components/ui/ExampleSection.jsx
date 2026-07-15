const ExampleSection = ({ number, title, description, topic, children }) => {
  const topicColors = {
    basics: 'border-orange-400 bg-orange-50',
    components: 'border-teal-400 bg-teal-50',
    'data-communication': 'border-indigo-400 bg-indigo-50',
  }

  return (
    <section
      className={`border-2 rounded-xl p-6 mb-8 text-left ${topicColors[topic] || 'border-gray-300 bg-gray-50'}`}
    >
      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{topic.replace('-', ' ')}</p>
      <h2 className="text-xl font-bold mb-1">
        {number}. {title}
      </h2>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="bg-white rounded-lg p-4 border border-gray-200">{children}</div>
    </section>
  )
}

export default ExampleSection
