import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Input from '../../../components/formikFields/input/Input';
import Bg from '../../../assets/images/svg/Ellipse3.svg';
import Chain from '../../../assets/images/svg/chain2.svg';
import Sparkels from '../../../assets/images/svg/sparkels2.svg';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
const Login = () => {
  return (
    <KeyboardAvoidingScrollView style={styles.container}>
      <Bg width={'100%'} height={'40%'} />
      <Sparkels style={styles.sparkel} fill={'white'} />
      <View style={styles.content}>
        <Chain fill={"red"} />
        <View style={styles.container2}>
          <Text style={styles.welcome}>Welcome back</Text>
          <View style={styles.imageContainer2}>
            <View>
              <Image
                source={require('../../../assets/images/png/EllipseBlue.png')}
              />
              <Image
                source={require('../../../assets/images/png/fb.png')}
                style={styles.socialSymbol}
              />
            </View>
            <View style={{marginLeft: 8}}>
              <Image
                source={require('../../../assets/images/png/EllipseRed.png')}
              />
              <Image
                source={require('../../../assets/images/png/googlee.png')}
                style={styles.socialSymbol}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Input />
        </View>
        <View style={styles.footer}>
          <Text style={styles.account}>Don’t have an account?</Text>
          <Text style={styles.signUp}>Sign up</Text>
        </View>
      </View>
    </KeyboardAvoidingScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  sparkel: {
    height: 79,
    width: '50%',
    top: -150,
    left: 100,
    zIndex: 3,
    color: 'white',
    // backgroundColor: 'red',
  },
  content: {
    position: 'relative',
    // flex : 1,
    // backgroundColor: 'yellow',
    paddingBottom: 74,
    top: -150,
  },
  // chain: {
  //   top: 0,
  //   width: '100%',
  //   // backgroundColor: 'yellow'
  // },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputContainer: {
    paddingHorizontal: 40,
    top: -40,
  },
  container2: {
    top: -40,
    paddingHorizontal: 44,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  welcome: {
    color: '#666666',
    fontSize: 14,
    lineHeight: 16.1,
    fontWeight: '400',
    opacity: 0.5,
    // backgroundColor: 'red',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 75,
    marginTop: 30,
    // backgroundColor : 'blue'
  },
  signUp: {
    color: '#ED6A42',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18.4,
  },
  account: {
    color: '#666666',
    opacity: 0.3,
    lineHeight: 16.1,
    fontSize: 14,
    fontWeight: '400',
  },
  imageContainer2: {
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  socialSymbol: {
    position: 'absolute',
    left: 15,
    top: 13,
  },
  oval: {
    // flex : 1,
    backgroundColor: '#F95D47',
    width: 150,
    height: 460,
    position: 'absolute',
    zIndex: 0,
    top: -250,
    left: 122,
    borderTopLeftRadius: 450,
    borderBottomLeftRadius: 450,
    transform: [{rotate: '-90deg'}],
  },
});
