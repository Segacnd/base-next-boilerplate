import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

import { typographyVariants } from './typography-config';
import { TypographyProps } from './typography-types';

export function Typography({
  size,
  weight,
  className,
  color,
  truncate,
  isHover,
  asChild,
  children,
  ...rest
}: TypographyProps) {
  const Component = asChild ? Slot : 'span';
  const styleProps = cn(typographyVariants({ color, weight, size, truncate, isHover }), className);
  return (
    <Component className={styleProps} {...rest}>
      {children}
    </Component>
  );
}
