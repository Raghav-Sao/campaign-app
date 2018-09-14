import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateCampaign } from 'actions/CampaignAction.js'
import './style.css'

class Popup extends Component {
  state = {
    campaignName: this.props.data.campaignName,
  }
  changeCampaignName = event => {
    const { target: { value: campaignName } } = event
    this.setState({
      campaignName,
    })
  }
  updateCampaignName = () => {
    const payload = {
      ...this.props.data,
      campaignName: this.state.campaignName,
      lastSavedAt: new Date(),
    }
    this.props.dispatch(updateCampaign({ payload }))
    this.props.closePopup()
  }
  render() {
    const { props: { data: { id } } } = this
    console.log(id, this.props)
    return (
      <div className="container__popup flex__container">
        <div className="flex__container" />
        <div className="card__popup flex__container dir__column">
          <span className="icon-cancel" onClick={this.props.closePopup} />
          <input
            type="text"
            value={this.state.campaignName}
            onChange={event => this.changeCampaignName(event)}
          />
          <button onClick={this.updateCampaignName}>Update</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ campaignReducer }) => ({
  campaignReducer
})

export default connect(mapStateToProps)(Popup)
