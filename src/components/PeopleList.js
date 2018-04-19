/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

type Props = {};
class PeopleList extends Component<Props> {
  componentWillMount() {
    const ds = new ListView.DataSource({
      // Erik - 4/19/2018 r1 and r2 are previous and new versions, so comparing to eachother, if new state is different then reload
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.people);
  }
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <ListView 
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <PeopleItem people={rowData} />
          }
        />
      </View>
    );
  }
}

//Erik - 4/19/2018 ES6 Syntax: Could also be (state) =>
//Erik - 4/19/2018 The state has an array called people this is passed from the state to the prop people
const mapStateToProps = state => {
  return { people: state.people }
}

// Erik - 4/19/2018 We are exporting PeopleList but we are also connecting the stateToProps
export default connect(mapStateToProps)(PeopleList);