import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import driversData from './DriversData';

const keyMapping = {
  id: "ID",
  name: "Nome",
  registered: "Data registo sistema",
  status: "Estado"
};

class Driver extends Component {

  render() {

    const driver = driversData.find( driver => driver.id.toString() === this.props.match.params.id)

    const driversDetails = driver ? Object.entries(driver) : [['id', (<span><i className="text-muted icon-ban"></i> Motorista não reconhecido</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={8}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Motorista número: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        driversDetails.map(([key, value]) => {
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

export default Driver;
