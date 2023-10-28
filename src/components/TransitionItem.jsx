import Image from 'next/image'
import { AnimatedLink } from '@/components/AnimatedLink'

export function TransitionItem ({ item }) {

  return (
    <li className='rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center'>
      <AnimatedLink
        href={`/transitions/${item.slug}`}
        animationName={item.animationName}
        className='p-4 flex justify-center flex-col items-center w-full'
      >
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {item.name}
        </h5>
        <p className='text-4xl'>{item.image}</p>
      </AnimatedLink>
    </li>
  )
}