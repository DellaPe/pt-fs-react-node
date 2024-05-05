import { useState, useEffect } from 'react'

type DebounceProps<T> = {
  value: T
  delay?: number
}

const DEFAUL_DELAY = 500

export function useDebounce<T> ({ value, delay }: DebounceProps<T>) {
  const delayTime = delay ?? DEFAUL_DELAY
  const [debounce, setDebounce] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => { setDebounce(value) }, delayTime)
    return () => { clearTimeout(timer) }
  }, [value, delayTime])
  return debounce
}
