import React, { Component } from 'react'
import { ButtonToolbar, Button, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class Settings extends Component {
  componentDidMount() {
    this.props.fetchSettings(this.props.params.id)
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    //const { toilet } = this.props;
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-sm-5">
                <h4 className="card-title mb-0">Toilet</h4>
                <Row className="show-grid">
                  <Col sm={3} md={6}>
                    <FormGroup controlId="formValidationNull" validationState={null}>
                        <ControlLabel>Zadajte počet použití, po ktorých sa spustí alarm</ControlLabel>
                        <FormControl name="pouzitia" type="text" />

                        <ControlLabel>Zadajte počet minút, kedy sa malá potreba zmení na veľkú</ControlLabel>
                        <FormControl name="minuty"type="text" />

                        <ControlLabel>spotreba vody v litroch</ControlLabel>
                        <FormControl name="spotreba" type="text" />

                        <ControlLabel>Zadajte url reklamneho banneru</ControlLabel>
                        <FormControl name="reklama" type="text" />
                      </FormGroup>


                    <ButtonToolbar>
                      <Button bsStyle="primary" bsSize="large" active>Uložiť</Button>  
                    </ButtonToolbar>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
