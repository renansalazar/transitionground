'use client'
import { useEffect } from 'react'
import hljs from 'highlight.js';
import "highlight.js/styles/github.css";

export function Playground ({ content }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className="rounded-lg border dark:border-white-600 p-6 w-full">
      <pre>
        <code className="css">{content}</code>
      </pre>
    </div>
  )
}
