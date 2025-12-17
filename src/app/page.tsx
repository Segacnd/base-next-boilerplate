import Link from 'next/link';

import { Typography } from '@/components/ui/typography/typography';

export default function Index() {
  return (
    <main>
      Hello
      <Link className="text-red-500" href="/posts">
        to Posts page
      </Link>
      {/* children */}
      <Typography color="primary" isHover weight="bold">
        text children
      </Typography>
      {/* asChild */}
      <Typography asChild color="muted" size="xl" weight="bold">
        <div>text aschild</div>
      </Typography>
    </main>
  );
}
