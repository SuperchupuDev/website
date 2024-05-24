import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function PostTitle({ children }: Props) {
  return <h1>{children}</h1>;
}
