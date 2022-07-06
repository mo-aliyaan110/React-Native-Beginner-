import { StyleSheet, View, Platform, Text, StatusBar, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <SafeAreaView>
        <View style={{
            backgroundColor: 'green',
            width: '100%',
            height: landscape ? '100%' : '30%'
            }}> 
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    backgroundColor: '#fff',
    padding: Platform.OS === 'android'? StatusBar.currentHeight : 0
    
  },
});
