
import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class AddVehicle extends Component {

  render() {
    return (<div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Adicionar viatura</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Marca</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Chevrolet" />
                      <FormText color="muted">Marca da viatura</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Matrícula</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="02-AA-03" />
                      <FormText color="muted">Matrícula da viatura</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Data registo <Badge>NOVO</Badge></Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="06/09/2017" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Estado</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Selecionar</option>
                        <option value="1">Ativo</option>
                        <option value="2">Inativo</option>
                        <option value="3">Pendente</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Adicionar</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Limpar</Button>
              </CardFooter>
            </Card>
        </Col>
    </Row>
    </div>);
  }

}

export default AddVehicle;















