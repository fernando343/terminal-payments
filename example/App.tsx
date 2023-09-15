import { StyleSheet, Text, View } from 'react-native';

import * as TerminalPayments from 'terminal-payments';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{TerminalPayments.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
