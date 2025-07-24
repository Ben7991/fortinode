import { GoArrowDown } from 'react-icons/go'

export default function Notifier() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0">
        <GoArrowDown className="text-5xl text-[var(--blue-100)] animate-bounce" />
      </div>
    </div>
  )
}
