import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = ({todoList, onTodoDeleted}) => {
  return (
    <FlatList
      data={todoList}
      renderItem={info => (
        <TodoListItem
          todo={info.item.value}
          onItemDeleted={() => onTodoDeleted(info.item.key)}
        />
      )}
    />
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoDeleted: PropTypes.func.isRequired,
};

export default TodoList;
