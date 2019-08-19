import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const TodoListItem = ({todo, onItemDeleted}) => {
  return (
    <View style={styles.todoListItem}>
      <Text style={styles.todoText}>{todo}</Text>
      <TouchableOpacity style={styles.todoDelButton} onPress={onItemDeleted}>
        <Text style={styles.todoDelText}>Del</Text>
      </TouchableOpacity>
    </View>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.string.isRequired,
  onItemDeleted: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  todoListItem: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#182533',
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  todoText: {
    flex: 6,
    //padding: 10,
    color: '#f5f5f5',
    paddingRight: 10,
  },
  todoDelButton: {
    flex: 1,
    backgroundColor: '#ff5555',
    borderRadius: 5,
    //margin: 5,
    height: 40,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoDelText: {
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
});

export default TodoListItem;
