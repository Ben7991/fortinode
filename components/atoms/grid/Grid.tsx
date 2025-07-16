import { ComponentPropsWithoutRef } from 'react'

export function Container(props: ComponentPropsWithoutRef<'div'>) {
  const { className, ...remainingProps } = props

  return (
    <div
      className={`${
        className ?? ''
      } w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[1135px] m-auto`}
      {...remainingProps}
    >
      {props.children}
    </div>
  )
}

export function Row(props: ComponentPropsWithoutRef<'div'>) {
  const { className, ...remainingProps } = props

  return (
    <div className={`${className ?? ''} flex`} {...remainingProps}>
      {props.children}
    </div>
  )
}

type ColProps = {
  colSize: 'col-4' | 'col-12' | 'col-6'
} & ComponentPropsWithoutRef<'div'>

export function Col({ colSize, ...props }: ColProps) {
  const { className, ...remainingProps } = props

  let colSizeClass = ''

  if (colSize === 'col-4') {
    colSizeClass = 'basis-full md:basis-1/2 xl:basis-1/3'
  } else if (colSize === 'col-6') {
    colSizeClass = 'basis-full md:basis-1/2 xl:basis-1/2'
  } else if (colSize === 'col-12') {
    colSizeClass = 'basis-full'
  }

  return (
    <div className={`${className ?? ''} ${colSizeClass}`} {...remainingProps}>
      {props.children}
    </div>
  )
}
