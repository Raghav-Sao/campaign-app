import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Popup from 'components/Popup'
import { deleteCampaign } from 'actions/CampaignAction'

import './Style.css'

class CampaignRow extends Component {
  state = {
    selectedId: {},
    showPopup: false,
    activeData: null,
  }

  deleteCampaign = id => {
    this.props.dispatch(deleteCampaign({ id }))
  }

  togglePopup = () => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup,
    }))
  }

  editCampaign = id => {
    this.setState(prevState => ({
      showPopup: !prevState.showPopup,
      activeData: id,
    }))
  }

  selectAll = event => {
    const { target: { checked } } = event,
      { props: { data } } = this,
      selectedId = {}
    data.forEach(({ id }) => {
      selectedId[id] = checked
    })
    this.setState({ selectedId })
  }

  selectCampaign = event => {
    const { target: { id, checked } } = event
    this.setState({
      selectedId: {
        ...this.state.selectedId,
        [id]: checked,
      },
    })
  }

  getCampaignHeader() {
    return (
      <div className="flex__card flex__container campaign__card campaign__header">
        <div className="checkbox__id">
          <input type="checkbox" value="" onClick={event => this.selectAll(event)} />
        </div>
        <div className="campaign__name">Campaign name</div>
        <div className="campaign__type">Type</div>
        <div className="campaign__date">Last Saved</div>
        <div className="campaign__action">Actions</div>
      </div>
    )
  }

  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <div className="flex__container campaign__cards dir__column">
          {this.getCampaignHeader()}
          {data.map(({ campaignName, id, type, lastSavedAt }, index) => (
            <div className="flex__card flex__container campaign__card">
              <div className="checkbox__id">
                <input
                  type="checkbox"
                  id={id}
                  onClick={event => this.selectCampaign(event)}
                  checked={this.state.selectedId[id]}
                />
              </div>
              <div className="campaign__name">{campaignName}</div>
              <div className="campaign__type">{type}</div>
              <div className="campaign__date">{moment(new Date(lastSavedAt)).format('LLLL')}</div>
              <div className="campaign__action">
                <span className="icon-trash-empty" onClick={() => this.deleteCampaign(id)} />
                <span className="icon-edit" onClick={() => this.editCampaign(index)} />
              </div>
            </div>
          ))}
        </div>
        {this.state.showPopup && (
          <Popup data={this.props.data[this.state.activeData]} closePopup={this.togglePopup} />
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ campaignReducer: { campaignList } }) => ({
  campaignList,
})

export default connect(mapStateToProps)(CampaignRow)
