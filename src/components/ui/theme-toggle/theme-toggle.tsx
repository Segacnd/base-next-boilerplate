'use client';
import { useTheme } from 'next-themes';

import { Button } from '../button/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2">
      The current theme is: {theme}
      <Button onClick={() => setTheme('light')} type="button">
        Light
      </Button>
      <Button onClick={() => setTheme('dark')} type="button">
        Dark
      </Button>
    </div>
  );
}
