// src/components/PageWithLayout.tsx
import React, { ReactNode } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import MainLayout from '../layouts/MainLayout';

interface PageWithLayoutProps {
  children: ReactNode;
}

const PageWithLayout: React.FC<PageWithLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </ThemeProvider>
  );
};

export default PageWithLayout;