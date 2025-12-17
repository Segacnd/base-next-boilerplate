import Link from 'next/link';

import { Typography } from '@/components/ui/typography/typography';

export default function Index() {
  return (
    <main>
      Hello
      <Link className="text-red-500" href="/posts">
        to Posts page
      </Link>
      <Typography render={(className) => <div className={className}>text</div>} weight="bold" />
    </main>
  );
}
