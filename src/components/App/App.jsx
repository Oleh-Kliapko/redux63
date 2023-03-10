import { getTodos } from 'redux/selectors';
import { useSelector } from 'react-redux';
import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
  Filter
} from 'components';

export const App = () => {
  const todos = useSelector(getTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
         <Filter/>
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
