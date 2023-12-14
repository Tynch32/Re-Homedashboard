import { Card,Table } from 'react-bootstrap';
import { TableItem } from './TableItem';

export const TableMovies = () => {

  const movies = [
    { 
      id:crypto.randomUUID(),
      title:"Rocky",
      length:120,
      rating:3,
      genres:["Acción","Drama"],
      awards:5
    },
    {
      id:crypto.randomUUID(),
      title:"Rambo",
      length:120,
      rating:1,
      genres:["Acción","Bélico"],
      awards:2
    },
    {
      id:crypto.randomUUID(),
      title:"Batman",
      length:120,
      rating:6,
      genres:["Acción","Suspenso"],
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
        {movies.map(({id,title,length,rating,awards,genres})=> <TableItem key={id} title={title} length={length} rating={rating} awards={awards} genres={genres}/>)}
      </tbody>
    </Table>
      </Card.Body>
    </Card>
  )
}

