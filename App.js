import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(1);
  const [promilles, setPromilles] = useState();
  
  

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]

  const hours = Array();
  hours.push({label: '1', value: 1});
  hours.push({label: '2', value: 2});
  hours.push({label: '3', value: 3});
  hours.push({label: '4', value: 4});
  hours.push({label: '5', value: 5});
  hours.push({label: '6', value: 6});
  hours.push({label: '7', value: 7});
  hours.push({label: '8', value: 8});
  hours.push({label: '9', value: 9});
  hours.push({label: '10', value: 10});
  hours.push({label: '11', value: 11});
  hours.push({label: '12', value: 12});

  const beers = Array();
  beers.push({label: '1', value: 1});
  beers.push({label: '2', value: 2});
  beers.push({label: '3', value: 3});
  beers.push({label: '4', value: 4});
  beers.push({label: '5', value: 5});
  beers.push({label: '6', value: 6});
  beers.push({label: '7', value: 7});
  beers.push({label: '8', value: 8});
  beers.push({label: '9', value: 9});
  beers.push({label: '10', value: 10});
  beers.push({label: '11', value: 11});
  beers.push({label: '12', value: 12});
  beers.push({label: '13', value: 13});
  beers.push({label: '14', value: 14});
  beers.push({label: '15', value: 15});
  beers.push({label: '16', value: 16});
  beers.push({label: '17', value: 17});
  beers.push({label: '18', value: 18});
  beers.push({label: '19', value: 19});
  beers.push({label: '20', value: 20});

  function calculate() {
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;

    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
      if (result < 0) {
        result = 0;
      }
    }
    else  {
      result = gramsLeft / (weight * 0.6);
      if (result < 0) {
        result = 0;
      }
    }
    setPromilles(result.toFixed(2));
  
  }

    
    {/*Result (for male): grams / (weight * 0.7)
    Result (for female): grams / (weight * 0.6)*/}
  

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput style={styles.input}
        onChangeText={text => setWeight(text)}
        placeholder="in kilograms"
        keyboardType='numeric'>
        </TextInput>
      </View>
      
      <View style={styles.field}>
          <Text>Gender</Text>
          <RadioForm style={styles.radio}
          buttonSize={10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}/>
      </View>
      <View style={styles.field}>
        <Text>Hours</Text>
        <Picker 
        onValueChange={(itemValue) => setTime(itemValue)}
        selectedValue={time}>
          {hours.map((time, index) => (
            <Picker.Item key={index} label={time.label}
            value={time.value}/>
          )
          )}
          </Picker>
          
          
        
      </View>
      <View style={styles.field}>
        <Text>Bottles</Text>
          <Picker 
            onValueChange={(itemValue) => setBottles(itemValue)}
            selectedValue={bottles}>
            {beers.map((bottles, index) => (
            <Picker.Item key={index} label={bottles.label}
            value={bottles.value}/>
              )
          )}
          </Picker>
      </View>
      <Text>Promilles: {promilles}</Text>
      <View style={styles.button}>
        <Button onPress={calculate} title="Calculate"></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  field: {
    margin: 10,
  },
  input: {
    marginLeft: 10, 
  },
  radio: {
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    marginTop: 20,
  }
});
