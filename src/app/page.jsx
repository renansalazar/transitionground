
import { transitions } from '@/data-temp'
import { TransitionItem } from '@/components/TransitionItem'
export default function Home() {
  const lista = transitions
  return (
    <ul className='grid grid-cols-1 gap-4 w-full max-w-4xl sm:grid-cols-2'>
      {lista.map(item => {
        return (
          <TransitionItem key={'key-' + item.id} item={item} />
        )
      })}
    </ul>
  )
}
