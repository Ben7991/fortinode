import { ComponentPropsWithoutRef } from 'react';

export function Container(props: ComponentPropsWithoutRef<'div'>) {
  const { className, ...remainingProps } = props;

  return (
    <div
      className={`${
        className ?? ''
      } w-[90%] md:w-[85%] xl:w-[80%] 2xl:w-[1135px] m-auto`}
      {...remainingProps}
    >
      {props.children}
    </div>
  );
}

export function Row(props: ComponentPropsWithoutRef<'div'>) {
  const { className, ...remainingProps } = props;

  return (
    <div className={`${className ?? ''} flex`} {...remainingProps}>
      {props.children}
    </div>
  );
}
