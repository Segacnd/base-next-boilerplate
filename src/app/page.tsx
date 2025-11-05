import Link from 'next/link';

export default function Index() {
  return (
    <main>
      Hello
      <Link href="/posts">to Posts page</Link>
    </main>
  );
}
