import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CommentSection from './src/components/CommentSection';

export default function App() {
  return (
    <View style={styles.container}>
      <CommentSection />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});