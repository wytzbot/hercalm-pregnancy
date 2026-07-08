export default function DoDont({ dos, donts }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      <div className="p-4 bg-green-50 rounded-xl">
        <h3 className="font-semibold text-green-700 mb-2">✅ Do's</h3>
        <ul className="list-disc list-inside text-sm space-y-1">{dos.map(d => <li key={d}>{d}</li>)}</ul>
      </div>
      <div className="p-4 bg-red-50 rounded-xl">
        <h3 className="font-semibold text-red-700 mb-2">❌ Don'ts</h3>
        <ul className="list-disc list-inside text-sm space-y-1">{donts.map(d => <li key={d}>{d}</li>)}</ul>
      </div>
    </div>
  )
                                                                         }
