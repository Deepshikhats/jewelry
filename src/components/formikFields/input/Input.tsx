import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import { login } from '../../../interfaces/interfaces';
import LinearGradient from 'react-native-linear-gradient';
import {t} from 'react-native-tailwindcss';
const Input = () => {
  const initialValues : login = {
    email: '',
    password: '',
  };
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSubmit}>
                <LinearGradient
                  colors={['#E5733F', '#F95D47']}
                  locations={[0.38, 1]}
                  useAngle={true}
                  angle={180}
                  style={styles.button}>
                  <Text style={styles.signIn}>Sign in</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.forget}>Forget Password?</Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderColor: '#00000021',
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    borderRadius: 100,
    paddingLeft: 30,
    fontWeight: '400',
    marginBottom: 7,
    color: '#000000',
  },
  button: {
    borderRadius: 100,
    height: 50,
    width: 139,
  },
  signIn: {
    color: '#FFFFFF',
    fontWeight: '700',
    marginTop: 15,
    // backgroundColor: 'yellow',
    textAlign: 'center',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 13,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forget: {
    color: '#000000',
    opacity: 0.3,
    fontSize: 14,
    fontWeight: '400',
  },
});
