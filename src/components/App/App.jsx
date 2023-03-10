import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getTodos } from 'redux/selectors';
import { useSelector } from 'react-redux';
import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from 'components';

export const App = () => {
  const todos = useSelector(getTodos);

  // const deleteTodo = id => {
  //   setTodos(prevState => prevState.filter(todo => todo.id !== id));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
