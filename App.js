import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        
        <Image source={require('./assets/menu.png')} style={styles.menu}/>
        
      </View>

      <View style={styles.content}>
        <Text onPress={() => console.log('tıklandı')} style={styles.button}>Tıkla</Text>
      </View>

    </SafeAreaView>


    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1
  },
  header: {
    height: 80,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  logo: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  menu: {
    width: 30,
    height: 30
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'darkorange',
    lineHeight: 35,
    textAlign: 'center'
  }
});
