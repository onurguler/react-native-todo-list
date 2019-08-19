import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import TodoInput from './components/todoInput/TodoInput';
import TodoList from './components/todoList/TodoList';

class App extends Component {
  state = {
    todoList: [],
  };

  onTodoAdded = todo => {
    this.setState({
      todoList: this.state.todoList.concat({
        key: Math.random().toString(),
        value: todo,
      }),
    });
  };

  onTodoDeleted = key => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.key !== key),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TodoInput onTodoAdded={this.onTodoAdded} />
        <TodoList
          todoList={this.state.todoList}
          onTodoDeleted={this.onTodoDeleted}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1621',
    padding: 20,
  },
});

export default App;
