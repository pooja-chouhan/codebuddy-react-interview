import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Forms from './Forms';

const Home = () => {
  const navigate = useNavigate();

  const onSubmit = () => navigate('/posts');

  return (
    <main>
      <Container>
        <Button onClick={onSubmit}>Goto Posts</Button>
        <Forms />
      </Container>
    </main>
  );
};

export default Home;
