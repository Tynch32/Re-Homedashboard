import { Card,Table } from 'react-bootstrap';
import { TableItem } from './TableItem';

export const TableProducts = () => {

  return (
    <Card className="shadow mb-5">
      <Card.Body>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Título</th>
          <th>Duración</th>
          <th>Rating</th>
          <th>Género</th>
          <th>Premios</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({id,name,price,discount,description,product_category})=> <TableItem key={id} name={name} price={price} discount={discount} description={description} product_category={product_category}/>)}
      </tbody>
    </Table>
      </Card.Body>
    </Card>
  )
}

