import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import mainStyles from "./styles/mainStyles";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function App() {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [resultado, setResultado] = useState(0);

  function soma() {
    let resultado = Number.parseFloat(firstValue.replace(',', '.')) + Number.parseFloat(secondValue.replace(',', '.'));
    setResultado(resultado);
  }

  function subtracao() {
    let resultado = Number.parseFloat(firstValue.replace(',', '.')) - Number.parseFloat(secondValue.replace(',', '.'));
    setResultado(resultado);
  }

  function multiplicacao() {
    let resultado = Number.parseFloat(firstValue.replace(',', '.')) * Number.parseFloat(secondValue.replace(',', '.'));
    setResultado(resultado);
  }

  function divisao() {
    let resultado = Number.parseFloat(firstValue.replace(',', '.')) / Number.parseFloat(secondValue.replace(',', '.'));
    setResultado(resultado);
  }

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.titleContainer}>
        <Text style={mainStyles.titleText}>Calculadora</Text>
      </View>

      <View>
        <Text style={mainStyles.textStyle}>Primeiro valor</Text>
        <View style={mainStyles.inputContainer}>
          <View>
            <TextInput style={mainStyles.textInput}
              placeholder='Digite um número'
              keyboardType='numeric'
              onChangeText={(text) => setFirstValue(text)}
              value={firstValue.toString()}>
            </TextInput>
          </View>
          <View>
            <TouchableOpacity style={[mainStyles.eraseIconButton]} onPress={() => setFirstValue('')}>
              <FeatherIcon name='delete' size={25}></FeatherIcon>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={mainStyles.textStyle}>Segundo valor</Text>
        <View style={mainStyles.inputContainer}>
          <View>
            <TextInput style={mainStyles.textInput}
              placeholder='Digite um número'
              keyboardType='decimal-pad'
              onChangeText={(text) => setSecondValue(text)}
              value={secondValue.toString()}>
            </TextInput>
          </View>
          <View>
            <TouchableOpacity style={[mainStyles.eraseIconButton]} onPress={() => setSecondValue('')}>
              <FeatherIcon name='delete' size={25}></FeatherIcon>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={mainStyles.mathOperationsContainer}>
        <TouchableOpacity style={[mainStyles.iconStyle]} onPress={() => soma()}>
          <AntDesignIcon name='plus' size={35}></AntDesignIcon>
        </TouchableOpacity>

        <TouchableOpacity style={[mainStyles.mathIcons, mainStyles.iconStyle]} onPress={() => subtracao()}>
          <AntDesignIcon name='minus' size={35}></AntDesignIcon>
        </TouchableOpacity>

        <TouchableOpacity style={[mainStyles.mathIcons, mainStyles.iconStyle]} onPress={() => multiplicacao()}>
          <AntDesignIcon name='close' size={35}></AntDesignIcon>
        </TouchableOpacity>

        <TouchableOpacity style={[mainStyles.mathIcons, mainStyles.iconStyle]} onPress={() => divisao()}>
          <FeatherIcon name='divide' size={35}></FeatherIcon>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={mainStyles.textStyle}>Resultado</Text>
        <TextInput style={mainStyles.textInput}
          editable={false}
          value={resultado.toFixed(2)}>
        </TextInput>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}