import { Button } from "@/components/Button"
import { transitions } from "@/data-temp"
import { Playground } from '@/components/Playground'
export default function Transitions ({ params }) {
  const animation = transitions.find(transition => transition.slug === params.slug)
  
  return (
    <>
      <h3
        className="mb-2 text-2xl font-medium leading-tight dark:text-gray-100">
        {animation.name}
      </h3>
      <p className='text-8xl'>{animation.image}</p>
      <div className="p-2 w-full flex flex-col items-start mx-auto">
        <Button textToCopy={animation.styles}/>
        <Playground content={animation.styles} />
      </div>
    </>
  )
}