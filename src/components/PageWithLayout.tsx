// src/components/PageWithLayout.tsx
import React, { ReactNode } from 'react';
import MainLayout from '../layouts/MainLayout';

interface PageWithLayoutProps {
  children: ReactNode;
}

const PageWithLayout: React.FC<PageWithLayoutProps> = ({ children }) => {
  return (
      <MainLayout>
        {children}
      </MainLayout>
  );
};

export default PageWithLayout;