import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TerminalPaymentsViewProps } from './TerminalPayments.types';

const NativeView: React.ComponentType<TerminalPaymentsViewProps> =
  requireNativeViewManager('TerminalPayments');

export default function TerminalPaymentsView(props: TerminalPaymentsViewProps) {
  return <NativeView {...props} />;
}
