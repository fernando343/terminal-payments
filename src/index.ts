import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TerminalPayments.web.ts
// and on native platforms to TerminalPayments.ts
import TerminalPaymentsModule from './TerminalPaymentsModule';
import TerminalPaymentsView from './TerminalPaymentsView';
import { ChangeEventPayload, TerminalPaymentsViewProps } from './TerminalPayments.types';

// Get the native constant value.
export const PI = TerminalPaymentsModule.PI;

export function hello(): string {
  return TerminalPaymentsModule.hello();
}

export async function setValueAsync(value: string) {
  return await TerminalPaymentsModule.setValueAsync(value);
}

const emitter = new EventEmitter(TerminalPaymentsModule ?? NativeModulesProxy.TerminalPayments);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TerminalPaymentsView, TerminalPaymentsViewProps, ChangeEventPayload };
