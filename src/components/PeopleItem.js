
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
      marginTop: 20,
  },
  title: {
      top: 20,
      left: 80,
      fontSize: 24,
  },
  image: {
      height: 100,
  },
  action: {
      backgroundColor: 'black',
      color: 'white',
  },
  icon: {
      position: 'absolute',
      top: 15,
      left: 0,
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0)',
  },
});

// Erik - 4/19/2018 Using stateless component bc don't need any of the lifecycle methods that come with full components
const PeopleItem = (props) => {
    return (
        // Erik - 4/19/2018 Bc anything in {} is js, can pass in array of styles and the last in list will be the dominant style
        <View style={[theme.cardStyle, styles.card]} >
            <Image 
                // source={{ uri: 'C:\Projects\ReactNative\crm\crm\src\images\background.jpg'}}
                source={require('../images/background.jpg')}
                style={[theme.cardImageStyle, styles.image]}
            />
            <Icon 
                name={'user'}
                size={100}
                style={styles.icon}
            />
            <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.first_name} {props.people.last_name}</Text>
            <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
        </View>
    );
};

export default connect(null, actions)(PeopleItem)