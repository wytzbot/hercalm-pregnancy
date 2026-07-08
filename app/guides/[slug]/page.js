import AudioPlayer from '@/components/AudioPlayer'
import DoDont from '@/components/DoDont'
import CitationBar from '@/components/CitationBar'
import AdSlot from '@/components/AdSlot'
import guides from '@/data/guides.json'
import { useLocalized } from '@/hooks/useLocalized'

export default function GuidePage({ params }) {
  const guide = guides.find(g => g.slug === params.slug) || guides[0]

  const title = useLocalized(guide.title)
  const intro = useLocalized(guide.intro)
  const content = useLocalized(guide.content)
  const dos = useLocalized(guide.dos)
  const donts = useLocalized(guide.donts)

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow my-6">
      <CitationBar source={guide.source} />
      <h1 className="font-playfair text-3xl mb-4">{title}</h1>
      <AudioPlayer text={content} />
      <p className="my-4 italic text-gray-600">{intro}</p>
      <div className="prose max-w-none">{content}</div>
      <DoDont dos={dos} donts={donts} />
      <h3 className="font-semibold mt-6 mb-2">FAQs</h3>
      {guide.faqs.map(f => (
        <div key={f.q} className="mb-3">
        <div className="flex justify-between items-center mb-4">
  <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">{guide.category}</span>
  <button 
    onClick={() => navigator.share && navigator.share({title: title, url: window.location.href})}
    className="text-xs text-gray-500">Share ↗</button>
</div>

{/* Progress bar */}
<div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
  <div className="bg-pink-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
</div>
          <b>Q: {f.q}</b>
          <p>A: {f.a}</p>
        </div>
      ))}
      <AdSlot />
    </article>
  )
                             }
