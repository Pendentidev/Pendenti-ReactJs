import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({product}) => {

  console.log(product)

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.desc}
            </Card.Text>
            <Card.Text>Precio:${product.price}
            </Card.Text>
            <Card.Text>Stock:{product.stock}
            </Card.Text>
          </Card.Body>
        </Card>
          );
}

export default ItemDetail