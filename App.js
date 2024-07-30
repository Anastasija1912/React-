import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const user = {
  name: "Alica",
  password: "Ytrewq",
  age: 20,
  gender: "Female"
}
function App() {
  return (
    <> 
       <h1>Hallo, Welt!</h1>
       <NewButton/>
   </>
  );
}

function NewButton(){
  return (
    <>
    <Button variant="success">первая кнопка на react</Button>{' '}
    </>
  )

  function infoCard(){
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Имя: {user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Пароль: {user.password}</Card.Subtitle>
        <Card.Text>
          тут просто текст.
          теперь вторая строчка.
          а это третья строчка.
        </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Gender: {user.gender}</Card.Footer>
    </Card>
    )
  }
}
export default App;
