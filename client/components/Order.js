import React from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, StyleSheet } from 'react-native';
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
  order: {
    padding: 20,
    paddingBottom: 40,
    height: 'auto',
    width: 800,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'lightblue',
  },
  buttonContainer: {
    marginTop: 20,
    height: 30,
    width: 100,
    backgroundColor: 'white',
  },
  button: {
    color: 'lightblue',
  }
});

const Order = (props) => {
  const orderItemsArray = [];
  let orderNum = '';
  let fullName = '';
  if (props.order !== undefined) {
    console.log('ZXCV:', Array.isArray(props.order));
    props.order.forEach((orderItem, i) => {
      fullName = orderItem.user_firstname + ' ' + orderItem.user_lastname;
      orderNum = orderItem.fk_orders;
      orderItemsArray.push(<Text style={{ fontSize: 18, fontWeight: 'bold' }} key={i}> {orderItem.menu_item_name}</Text>);
    });
  }
  return (
    <View style={styles.order}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ORDER: {orderNum}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>CUSTOMER: {fullName}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ITEMS:</Text>
      { orderItemsArray }
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="DONE" onPress={() => { props.completeOrder(orderNum); }} />
      </View>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
