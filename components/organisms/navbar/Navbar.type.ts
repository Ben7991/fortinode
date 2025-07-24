import { MouseEvent } from 'react'

export type NavLinkProps = {
  href: string
  text: string
}

export type LargeScreenNavProps = {
  onToggleDropdown: (event: MouseEvent<HTMLButtonElement>) => void
  state: boolean
}

export type MobileNavProps = {
  showNav: boolean
  onToggleNav: () => void
}
