'use client';

import { MainLayout } from '@/components/main-layout';
import { CallHistory } from '@/components/pages/call-history';

export default function CallHistoryPage() {
  return (
    <MainLayout>
      <CallHistory />
    </MainLayout>
  );
}
