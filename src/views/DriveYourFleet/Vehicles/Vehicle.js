import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import vehiclesData from './VehiclesData';

const keyMapping = {
  id: "ID",
  name: "Marca",
  plate: "Matrícula",
  registered: "Data registo",
  status: "Estado"
};

class Vehicle extends Component {

  render() {

    const vehicle = vehiclesData.find( vehicle => vehicle.id.toString() === this.props.match.params.id)

    const vehicleDetails = vehicle ? Object.entries(vehicle) : [['id', (<span><i className="text-muted icon-ban"></i> Veículo não encontrado</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={8}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Informações do veículo : {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        vehicleDetails.map(([key, value]) => {

                          return (
                            <tr key={key}>
                              <td>{`${keyMapping[key]}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
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

export default Vehicle;
