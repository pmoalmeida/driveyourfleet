import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import driversData from './DriversData'

function DriverRow(props) {
  const driver = props.driver
  const driverLink = `#/drivers/${driver.id}`

  const getBadge = (status) => {
    return status === 'Ativo' ? 'success' :
      status === 'Inativo' ? 'secondary' :
        status === 'Pendente' ? 'warning' :
          status === 'Banido' ? 'danger' :
            'primary'
  }

  return (
    <tr key={driver.id.toString()}>
        <th scope="row"><a href={driverLink}>{driver.id}</a></th>
        <td><a href={driverLink}>{driver.name}</a></td>
        <td>{driver.registered}</td>
        <td><Badge href={driverLink} color={getBadge(driver.status)}>{driver.status}</Badge></td>
    </tr>
  )
}

class Drivers extends Component {

  render() {

    const driversList = driversData.filter((driver) => driver.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Motoristas
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Data de registo de sistema</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driversList.map((driver, index) =>
                      <DriverRow key={index} driver={driver}/>
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

export default Drivers;
