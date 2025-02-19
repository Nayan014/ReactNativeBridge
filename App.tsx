import React, {useState} from 'react';
import {
  TouchableOpacity,
  NativeModules,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface NativeModule {
  add: (a: number, b: number) => Promise<number>;
  subtract: (a: number, b: number) => Promise<number>;
}

const {NativeModule} = NativeModules as {NativeModule: NativeModule};

const App: React.FC = () => {
  const [add, setAdd] = useState<string | number>('');
  const [sub, setSub] = useState<string | number>('');

  const subtraction = async () => {
    try {
      const result = await NativeModule.subtract(10, 5);
      setSub(result);
    } catch (error) {
      console.error(error);
    }
  };

  const addition = async () => {
    try {
      const result = await NativeModule.add(3, 4);
      setAdd(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>React Native Native Module</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addition}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={subtraction}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        onPress={() => {
          setAdd('');
          setSub('');
        }}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Addition of 3 + 4 is <Text style={styles.result}>{add}</Text>
        </Text>
        <Text style={styles.resultText}>
          Subtraction of 10 - 5 is <Text style={styles.result}>{sub}</Text>
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#ff4081',
    width: '80%',
    marginBottom: 20,
    flex: 0,
  },
  resultContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  result: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
});
