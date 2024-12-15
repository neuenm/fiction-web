import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const Row = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn('grid w-full grid-cols-12 gap-2 lg:gap-6', className)}
      ref={ref}
      {...props}
    />
  );
});
Row.displayName = 'Row';

export { Row };
