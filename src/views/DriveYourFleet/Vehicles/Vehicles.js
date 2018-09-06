import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import vehiclesData from './VehiclesData';

function VehicleRow (props) {
  const vehicle = props.vehicle;
  const vehicleLink = `#/vehicles/${vehicle.id}`;

  const getBadge = (status) => {
    return status === 'Ativo' ? 'success' :
      status === 'Inativo' ? 'secondary' :
        status === 'Pendente' ? 'warning' :
          status === 'Vendido' ? 'danger' :
            'primary'
  }

  return (
    <tr key={vehicle.id.toString()}>
        <th scope="row"><a href={vehicleLink}>{vehicle.id}</a></th>
        <td><a href={vehicleLink}>{vehicle.name}</a></td>
        <td>{vehicle.registered}</td>
        <td>{vehicle.plate}</td>
        <td><Badge href={vehicleLink} color={getBadge(vehicle.status)}>{vehicle.status}</Badge></td>
    </tr>
  )
}

class Vehicles extends Component {

  render() {

    const vehicleList = vehiclesData.filter((vehicle) => vehicle.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Lista de Viaturas
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Data registo</th>
                      <th scope="col">Matrícula</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicleList.map((vehicle, index) =>
                      <VehicleRow key={index} vehicle={vehicle}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Vehicles;
