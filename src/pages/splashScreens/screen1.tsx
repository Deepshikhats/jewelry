import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Layout from '../../components/layout/layout';
import Chain from '../../assets/images/svg/chain.svg'
const Screen1 = ({navigation} : any) => {
    setTimeout(() => {
        navigation.replace('Screen2')
    },1500)
  return (
    <View>
      <Layout height={'65%'} sparkels = {true}>
        <Chain height={344} width={'100%'} style={styles.chain}/>
      </Layout>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
    chain : {
        position : 'absolute',
        top: -70,
        left: -35,
        zIndex : 0,
      }
});
