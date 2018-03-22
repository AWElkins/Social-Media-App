import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.name}</Text>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#1c94e0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    borderRadius: 2,
    position: 'relative',
    marginBottom: 0,
  },

  textStyle: {
    fontSize: 22,
  }
};

export default Header;
