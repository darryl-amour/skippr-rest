import React from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import store from '../store';
import * as actions from '../actions/actions';



const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
  completeOrder: (orderNum) => {
    dispatch(actions.completeOrder(orderNum));
  }

});

const styles = StyleSheet.create({
  menu: {
    paddingBottom: 20,
    height: 'auto',
    width: 850,
    marginTop: 14,
    marginBottom: 40,
    marginRight: '7%',
    marginLeft: '7%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 8
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  button: {
    padding: 7,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23
  }
});

const MenuItem = (props) => {
  return (
    <View style={styles.menu}>
      <Text style={{ fontSize: 25, padding: 5, color: 'white', backgroundColor: 'lightblue', fontWeight: 'bold'}}>Menu Item:</Text>
      <Text style={{ fontSize: 22, padding: 5, paddingLeft: 5, marginTop: 10, fontWeight: 'bold', color: 'black' }}>{props.menuItemName}    ${props.menuItemPrice}</Text>
      <FontAwesome>{Icons.chevronLeft}</FontAwesome>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
