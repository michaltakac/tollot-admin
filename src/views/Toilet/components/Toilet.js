import React, { Component } from 'react'
import { ButtonToolbar, Button, Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class Toilet extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      alarmInterval: this.props.toilet.alarmInterval || '',
      waterUsage: this.props.toilet.waterUsage || '',
      waterPrice: this.props.toilet.waterPrice || '',
      banner: this.props.toilet.banner || ''
    };

    this.handleAlarmIntervalChange = this.handleAlarmIntervalChange.bind(this);
    this.handleWaterUsageChange = this.handleWaterUsageChange.bind(this);
    this.handleWaterPriceChange = this.handleWaterPriceChange.bind(this);
    this.handleBannerUrlChange = this.handleBannerUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.props.fetchToilet(this.props.params.id);
    this.props.fetchSettings(this.props.params.id);
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props);
    /*this.setState = {
      alarmInterval: this.props.toilet.alarmInterval || '',
      waterUsage: this.props.toilet.waterUsage || '',
      waterPrice: this.props.toilet.waterPrice || '',
      banner: this.props.toilet.banner || ''
    };*/
  }

  handleAlarmIntervalChange(event) {
    this.setState({alarmInterval: event.target.value});
  }

  handleWaterUsageChange(event) {
    this.setState({waterUsage: event.target.value});
  }

  handleWaterPriceChange(event) {
    this.setState({waterPrice: event.target.value});
  }

  handleBannerUrlChange(event) {
    this.setState({banner: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.setSettings(this.props.params.id, this.state);
  }

  render() {
    const { toilet } = this.props;
    console.log(toilet);
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-block">
            <Row>
              <Col sm={6}>
                <h4 className="card-title mb-0">Toilet</h4>
                <div>
                    Toilet ID: {toilet._id}<br />
                    Toilet token: {toilet.token}<br />
                    Active: {String(toilet.active)}<br />
                    Status: {String(toilet.status)}<br />
                    Category ID: {String(toilet.categoryId)}<br />
                    Banner: <img src={`${toilet.banner}`} alt={`${toilet.banner}`} /><br />
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={6} md={6}>
                <h4 className="card-title mb-0">Settings</h4>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="formValidationNull" validationState={null}>
                      <ControlLabel>Amount of minutes until alarm starts</ControlLabel>
                      <FormControl name="alarmInterval" type="number" value={this.state.alarmInterval} onChange={this.handleAlarmIntervalChange}/>

                      {/*<ControlLabel>Amount of minutes for short toilet stay</ControlLabel>
                      <FormControl name="minuty" type="number" />*/}

                      <ControlLabel>Water usage for every flush (litres)</ControlLabel>
                      <FormControl name="waterUsage" type="number" value={this.state.waterUsage} onChange={this.handleWaterUsageChange} />

                      <ControlLabel>Price for 1 liter</ControlLabel>
                      <FormControl name="waterPrice" type="number" value={this.state.waterPrice} onChange={this.handleWaterPriceChange} />

                      <ControlLabel>Banner URL</ControlLabel>
                      <FormControl name="banner" type="text" value={this.state.banner} onChange={this.handleBannerUrlChange} />
                    </FormGroup>


                  <ButtonToolbar>
                    <Button type="submit" bsStyle="primary" bsSize="large" active>Save</Button>  
                  </ButtonToolbar>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Toilet
