import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock,}) => {

const route = `/item/${id}`
console.log(id, name, img, price, stock,)
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Precio:${price}
            </Card.Text>
            <Card.Text>Stock:{stock}
            </Card.Text>
            <Button as={Link} to ={route} variant="primary">Ver Detalle</Button>
          </Card.Body>
        </Card>
          );
}

export default Item
   