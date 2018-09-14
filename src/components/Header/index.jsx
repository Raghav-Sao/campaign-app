import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import { updateFilterName } from 'actions/CampaignAction.js'

class Header extends Component {
  render() {
    const { totalCount } = this.props
    const filterName = e => {
      this.props.dispatch(updateFilterName({ filterName: e.target.value }))
    }
    return (
      <div className="header flex__container">
        <div className="header__text">
          <input type="text" onChange={e => filterName(e)} placeholder="search....." />
        </div>
        <div className="header__right">total: {totalCount}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ campaignReducer: { totalCount } }) => ({
  totalCount,
})

export default connect(mapStateToProps)(Header)
