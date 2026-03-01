import { View, Text, StyleSheet, Platform } from 'react-native';
import { Jazzicon } from 'react-native-jazzicon';

const ADDRESSES = [
  '0x1234567890123456789012345678901234567890',
  '0x742d35Cc6634C0532925a3b844Bc9e7595f2EE31',
  '0x8Ba1f109551bD432803012645Ac136ddd64DBA72',
  '0xF977814e90dA44bFA03b6295A0616a897441aceC',
];

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>react-native-jazzicon</Text>
        <Text style={styles.subtitle}>
          Deterministic, colorful identicons for wallet addresses.
        </Text>

        <View style={styles.hero}>
          <Jazzicon size={80} address={ADDRESSES[0]} />
        </View>

        <View style={styles.row}>
          {ADDRESSES.slice(1).map((address) => (
            <View key={address} style={styles.item}>
              <Jazzicon size={40} address={address} />
            </View>
          ))}
        </View>

        <View style={styles.captionBox}>
          <Text style={styles.captionLabel}>Example</Text>
          <Text style={styles.captionCode}>
            {'<Jazzicon size={40} address="0x..." />'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 6,
  },
  hero: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
    flex: 1,
  },
  captionBox: {
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  captionLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#9ca3af',
    marginBottom: 4,
  },
  captionCode: {
    fontSize: 12,
    color: '#111827',
    fontFamily: Platform.select({
      ios: 'Menlo',
      android: 'monospace',
      default: 'monospace',
    }),
  },
});
