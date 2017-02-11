import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Analytics extends Component {
  constructor(props) {
    super(props);

    const startDate = moment().subtract(7, 'days');
    const endDate = moment();
    this.state = {
      startDate: startDate,
      endDate: endDate,
      query: `hourly/sum?from=${startDate.format('YYYY-MM-DD')}&to=${endDate.format('YYYY-MM-DD')}`
    }

    this.props.fetchAnalytics(this.state.query);

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date,
      query: `hourly/sum?from=${date.format('YYYY-MM-DD')}&to=${this.state.endDate.format('YYYY-MM-DD')}`
    });

    this.props.fetchAnalytics(this.state.query);
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date,
      query: `hourly/sum?from=${this.state.startDate.format('YYYY-MM-DD')}&to=${date.format('YYYY-MM-DD')}`
    });

    this.props.fetchAnalytics(this.state.query);
  }

  render() {

    let barChart = '';

    if (this.props.analytics && this.props.analytics.length > 0) {

      const bar = {
        labels: this.props.analytics.map(d=>d.time),
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: this.props.analytics.map(d=>d.value)
          }
        ]
      };

      barChart = <Bar data={bar} options={{maintainAspectRatio: true}} />
    };

    return (
      <div className="animated fadeIn">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartDateChange}
        />
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleEndDateChange} 
        />
        <div className="card-columns cols-1">
          {/*<div className="card">
            <div className="card-header">
              Line Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Line data={line}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </div>
            </div>
          </div>*/}
          <div className="card">
            <div className="card-header">
              Bar Chart
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
              {barChart}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Analytics;
