import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const headerVariants = cva('w-full flex justify-between items-center p-page bg-chart-5 ', {
  variants: {
    position: {
      relative: 'relative',
      fixed: 'fixed top-0',
    },
  },
  defaultVariants: {
    position: 'fixed',
  },
});
type HeaderVariantsProps = VariantProps<typeof headerVariants>;
type HeaderProps = {
  logo?: string;
  items?: string[];
  anotherItems?: string[];
  className?: string;
} & HeaderVariantsProps &
  HTMLAttributes<HTMLElement>;
export default function Header({
  logo,
  items,
  anotherItems,
  position,
  className,
  ...rest
}: HeaderProps) {
  const styleProps = cn(headerVariants({ position }), className);

  return (
    <header className={styleProps} {...rest}>
      {logo}
      <ul className="flex items-center justify-center gap-5">
        {items?.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <ul className="flex items-center justify-center gap-5">
        {anotherItems?.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </header>
  );
}
