import Link from 'next/link';

import Header from '@/components/ui/header/header';
import PageBlock from '@/components/ui/page-block/page-block';
import ThemeToggle from '@/components/ui/theme-toggle/theme-toggle';
import Typography from '@/components/ui/typography/typography';

export default function Index() {
  return (
    <main>
      <Header
        anotherItems={['SignIn', 'SignUp']}
        items={['Home', 'About', 'Shop', 'Profile']}
        logo="Logo"
      />
      <PageBlock className="bg-chart-1">
        <Typography asChild color="muted" size="xl" weight="bold">
          <div>Block 1 </div>
        </Typography>
        <Link className="text-red-500" href="/posts">
          to Posts page
        </Link>
        <ThemeToggle />
        {/* children */}
        <Typography color="primary" isHover weight="bold">
          text children
        </Typography>
      </PageBlock>
      <PageBlock className="bg-chart-2" justify="start">
        {/* asChild */}
        <Typography asChild color="muted" size="xl" weight="bold">
          <div>Block 2</div>
        </Typography>
        <Link className="text-red-500" href="/posts">
          to Posts page
        </Link>
        <ThemeToggle />
        {/* children */}
        <Typography color="primary" isHover weight="bold">
          text children
        </Typography>
      </PageBlock>
      <PageBlock className="bg-chart-3" justify="end">
        <Typography asChild color="muted" size="xl" weight="bold">
          <div>Block 3</div>
        </Typography>
        <Link className="text-red-500" href="/posts">
          to Posts page
        </Link>
        <ThemeToggle />
        <Typography color="primary" isHover weight="bold">
          text children
        </Typography>
      </PageBlock>
    </main>
  );
}
