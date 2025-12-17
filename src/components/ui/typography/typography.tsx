import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Example() {
  return (
    <div>
      <Typography render={(className) => <div className={className}>text</div>} weight="bold" />
    </div>
  );
}

const typographyVariants = cva('text-foreground transition-colors', {
  variants: {
    variant: {
      default: ' hover:text-foreground/80 shadow-default',
      primary: 'text-primary hover:text-primary/80 shadow shadow-primary',
    },
    weight: {
      regular: 'font-normal',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'default',
    weight: 'regular',
  },
});
type TypographyVariantsProps = VariantProps<typeof typographyVariants>;

type TypographyTag = 'h1' | 'h2' | 'span';
type TypographyWithChildren = {
  children: ReactNode;
  render?: never;
};

type TypographyWithRender = {
  render: (className: string) => ReactNode;
  children?: never;
};
type TypographyContent = TypographyWithChildren | TypographyWithRender;
type TypographyProps = {
  tag?: TypographyTag;
  className?: string;
};

export function Typography({
  render,
  children,
  tag,
  weight,
  className,
  variant = 'default',
}: TypographyProps & TypographyContent & TypographyVariantsProps) {
  const Node = tag ? tag : 'span';
  const renderProps = cn(typographyVariants({ variant, weight }), className);
  return render ? render(renderProps) : <Node className={renderProps}>{children}</Node>;
}
