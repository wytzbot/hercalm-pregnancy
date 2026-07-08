import AudioPlayer from '@/components/AudioPlayer'
import DoDont from '@/components/DoDont'
import CitationBar from '@/components/CitationBar'
import AdSlot from '@/components/AdSlot'
import guides from '@/data/guides.json'

export default function Guide({ params }) {
  const guide = guides.find(g => g.slug === params.slug)
  
  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <CitationBar source={guide.source} />
      <h1 className="font-playfair text-3xl mb-4">{guide.title}</h1>
      <AudioPlayer text={guide.content} />
      <p className="my-4">{guide.intro}</p>
      <div className="prose">{guide.content}</div>
      
      <DoDont dos={guide.dos} donts={guide.donts} />
      
      <h3 className="font-semibold mt-6">FAQs</h3>
      {guide.faqs.map(f => <div key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}
      
      <AdSlot /> {/* Hidden until you add AdSense ID */}
    </article>
  )
    }
