"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export function AnimatedLink({ href, animationName = 'default', children, className='' }) {
  const router = useRouter()
  const animatedRoute = () => {
    document.documentElement.classList.add(animationName)
    if (!document.startViewTransition) {
      return router.push(href);
    } else {
      let viewTransition = document.startViewTransition(() => {
        router.push(href)
      })
      viewTransition.finished.finally(() => {
        document.documentElement.classList.remove(animationName)
      })
    }
  };

  return (
    <Link
      href={href}
      onClick={(e) => {
        animatedRoute();
      }}
      className={className}
    >
      {children}
    </Link>
  );
}