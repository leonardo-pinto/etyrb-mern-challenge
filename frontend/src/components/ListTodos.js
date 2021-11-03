/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions/todosActions';
import { getSortedTodos } from '../services/todosServices';
import Todo from './Todo';

function ListTodos() {
  const dispatch = useDispatch();
  useSelector(getSortedTodos);
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      { todos.length !== 0
        ? (
          <div>
            { todos.map((todo) => (
              <div key={ todo._id }>
                <Todo todo={ todo } />
              </div>
            )) }
          </div>
        )
        : <h1>No todos</h1> }
    </div>
  );
}

export default ListTodos;
