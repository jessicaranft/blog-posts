import { Container } from './styles';
import { PostList } from '../../components/PostList';

export function Home() {
  return (
    <Container>
      <h1>Últimos posts:</h1>
      <PostList />
    </Container>
  )
}