import {StyleSheet, Image, View, Text, ScrollView} from 'react-native';
import React from 'react';
import Layout from '../../components/layout/layout';
import Ring from '../../assets/images/svg/ring.svg';
const Screen2 = ({navigation}: any) => {
  setTimeout(() => {
      navigation.replace('Login')
  },2000)
  return (
    <View style={styles.container}>
      <Layout height={'80%'} sparkels = {true}>
        <Ring style={styles.ring} />
        <Text style={styles.text}>Personalized Jewelry</Text>
      </Layout>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  ring: {
    top: -100,
    left: 30,
    zIndex: 10,
    // resizeMode : 'contain',
    width : '50%'
  },
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    bottom: 375,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 45,
    color: 'white',
    textAlign: 'center',
    zIndex: 6,
    // backgroundColor : 'red'
  },
});
