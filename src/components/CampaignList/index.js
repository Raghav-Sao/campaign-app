import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import CampaignRow from 'components/CampaignRow'
import Header from 'components/Header'
import Pagination from 'react-js-pagination'
import { handlePageChange, getCampaignData } from 'actions/CampaignAction'
import './Style.css'

class CampaignList extends Component {
  handlePageChange(currentPage) {
    this.props.dispatch(handlePageChange({ currentPage }))
  }

  componentDidMount() {
    this.props.dispatch(getCampaignData())
  }

  render() {
    const { data, totalCount, currentPage } = this.props
    return (
      <Fragment>
        <Header />
        <CampaignRow data={data} />
        {totalCount === 0 && (
          <div className="empty__campaign flex__container">
            <span>No data Availabel</span>
          </div>
        )}
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={totalCount}
          pageRangeDisplayed={10}
          onChange={currentPage => this.handlePageChange(currentPage)}
          className="flex__container"
        />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ campaignReducer: { data, totalCount, currentPage } }) => ({
  data,
  totalCount,
  currentPage,
})
export default connect(mapStateToProps)(CampaignList)
