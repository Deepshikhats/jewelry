import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Bg from '../../assets/images/svg/Ellipse1.svg';
import Sparkels from '../../assets/images/svg/sparkels1.svg';
import Sparkels1 from '../../assets/images/svg/sparkels2.svg';
const Layout = (props: any) => {
  return (
    <View style={styles.container}>
      <Bg height={props.height} width={'100%'} style={styles.image} />
      {props.sparkels ? <Sparkels style={styles.sparkles} /> :
      <Sparkels1 style={styles.Sparkels1}/> }
      <View>{props.children}</View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    //  flex : 1,
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    // position: 'absolute',
    zIndex: 2,
  },
  sparkles: {
    position: 'absolute',
    top: 170,
    left: 100,
    zIndex: 3,
  },
  chain: {
    position: 'absolute',
    top: -70,
    // left: -30,
    zIndex: 0,
    transform: [{scaleY: 0.8}],
  },
  Sparkels1 : {
    height: 79,
    width: '50%',
    top: -150,
    left: 100,
    zIndex: 2,
    color: 'white',
    // backgroundColor: 'red',
  },
});
