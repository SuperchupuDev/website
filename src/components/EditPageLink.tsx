'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const EditPageLink = () => {
  const pathname = usePathname();
  return (
    <aside id="edit-page">
      <Link href={`https://github.com/SuperchupuDev/website/blob/main/src/app${pathname}/page.tsx`} target="_blank">
        Edit this page on GitHub
      </Link>
    </aside>
  );
};
