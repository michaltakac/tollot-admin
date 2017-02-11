import React, { Component } from 'react'
import ToiletItem from './ToiletItem'

class Toilets extends Component {
  componentDidMount() {
    this.props.fetchToilets()
    console.log(this.props);
  }
  render() {
    console.log(this.props);
    const { toilets } = this.props;
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-sm-5">
                <h4 className="card-title mb-0">Toilets</h4>
                { toilets && toilets.map(t=><ToiletItem key={t._id} id={t._id} token={t.token} active={t.active} status={t.status} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Toilets
