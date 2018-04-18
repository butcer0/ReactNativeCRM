/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


const styles = StyleSheet.create({
  loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});

// Erik - 4/18/2018 This is a stateless component
const Loader = ({ size }) => {
    return(
        <View style={styles.loader}>
            {/* This syntax means takes size, if not passed default 'small' */}
            <Activity size={size || 'small'} />
        </View>
    );
};

// Erik - 4/18/2018 Could have exported at top like component, this is another style for stateless component
export default Loader;