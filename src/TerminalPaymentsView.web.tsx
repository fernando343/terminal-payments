import * as React from 'react';

import { TerminalPaymentsViewProps } from './TerminalPayments.types';

export default function TerminalPaymentsView(props: TerminalPaymentsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
