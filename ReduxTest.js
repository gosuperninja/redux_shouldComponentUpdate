/**
 * @flow
 */

import React, {Component, PureComponent} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {connect} from 'react-redux';


class ReduxTest extends React.Component<{}> {

  render() {
    console.log("render props : " + JSON.stringify(this.props))
    console.log("render state : " + JSON.stringify(this.state))
    
    if ( this.props.field_A != 2 ) {
      console.log("Dispatching field_A : 2")
      this.props.dispatch( { type : "UPDATE_FIELD_A", field_A : 2} );
    }
    
    return (
        <View style={styles.container}>
          <Text>
            {this.props.field_A}
          </Text>
        </View>
    );
  }
  componentWillReceiveProps ( nextProps ) {
    //Figure out correct view
    console.log("componentWillReceiveProps nextProps : " + JSON.stringify(nextProps))
  }

  shouldComponentUpdate() {

    //Figure out correct view
    console.log("shouldComponentUpdate props : " + JSON.stringify(this.props))
    console.log("shouldComponentUpdate state : " + JSON.stringify(this.state))
    return true   
  }

 
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps state : " + JSON.stringify(state))
  console.log("mapStateToProps props : " + JSON.stringify(ownProps))

  return { field_A : state.field_A }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default connect(mapStateToProps)(ReduxTest)