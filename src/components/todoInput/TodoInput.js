import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const TodoInput = ({onTodoAdded}) => {
  const [todo, setTodo] = useState('');

  const onChangeText = val => setTodo(val);

  const onPress = () => {
    if (todo.trim() === '') {
      alert('Todo cannot be null!');
      return;
    }

    onTodoAdded(todo);
  };

  return (
    <View style={styles.todoContainer}>
      <TextInput
        style={styles.todoInput}
        value={todo}
        onChangeText={onChangeText}
        placeholderTextColor={'#6a7580'}
        placeholder="Type something"
        selectionColor={'#f5f5f5'}
      />
      <TouchableOpacity style={styles.todoButton} onPress={onPress}>
        <Text style={styles.todoButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

TodoInput.propTypes = {
  onTodoAdded: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  todoContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  todoInput: {
    //width: '80%',
    flex: 6,
    borderColor: '#6a7580',
    borderWidth: 1,
    borderRadius: 5,
    color: '#f5f5f5',
    marginRight: 20,
  },
  todoButton: {
    //width: '20%',
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#429bdb',
    paddingHorizontal: 5,
  },
  todoButtonText: {
    color: '#f5f5f5',
    padding: 7,
    fontWeight: 'bold',
  },
});

export default TodoInput;
