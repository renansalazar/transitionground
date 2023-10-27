'use client'
import { useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTimerStore } from "@/store/timer"

export function Playground ({ content }) {
  const timerValue = useTimerStore(state => state.timer)
  const contentFormat = content.replaceAll('<% timer /%>', timerValue+"ms")
  return (
    <div className="rounded border dark:border-white-600 w-full overflow-hidden">
      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {contentFormat}
      </SyntaxHighlighter>
    </div>
  )
}
