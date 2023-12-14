import { Card,Table } from 'react-bootstrap';
import { TableItem } from './TableItem';

export const TableProducts = () => {

  const products = [
    { 
      id:crypto.randomUUID(),
      title:"Rocky",
      length:120,
      rating:3,
      categories:["Acción","Drama"],
      awards:5
    },
    {
      id:crypto.randomUUID(),
      title:"Rambo",
      length:120,
      rating:1,
      categories:["Acción","Bélico"],
      awards:2
    },
    {
      id:crypto.randomUUID(),
      title:"Batman",
      length:120,
      rating:6,
      categories:["Acción","Suspenso"],
      awards:0
    }
  ]
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
        {products.map(({id,title,length,rating,awards,categories})=> <TableItem key={id} title={title} length={length} rating={rating} awards={awards} categories={categories}/>)}
      </tbody>
    </Table>
      </Card.Body>
    </Card>
  )
}

