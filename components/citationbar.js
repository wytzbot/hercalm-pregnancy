export default function CitationBar({ source }) {
  return (
    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs mb-4">
      <p><b>Medically Reviewed Source:</b> {source}</p>
      <p className="text-gray-500 mt-1">This is general information. Talk to your healthcare provider.</p>
    </div>
  )
    }
