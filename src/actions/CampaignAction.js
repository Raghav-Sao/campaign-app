export const DELETE_CAMPAIGN = 'DELETE_CAMPAIGN'
export const HANDLE_PAGE_CANGE = 'HANDLE_PAGE_CANGE'
export const UPDATE_CAMPAIGN_DATA = 'UPDATE_CAMPAIGN_DATA'
export const UPDATE_FILTER_NAME = 'UPDATE_FILTER_NAME'
export const FILTER_CAMPAIGN_DATA = 'FILTER_CAMPAIGN_DATA'
export const GET_CAMPAIGN_DATA = 'GET_CAMPAIGN_DATA'

export const deleteCampaign = payload => ({
  type: DELETE_CAMPAIGN,
  payload,
})

export const getCampaignData = payload => ({
  type: GET_CAMPAIGN_DATA,
})

export const handlePageChange = payload => ({
  type: HANDLE_PAGE_CANGE,
  payload,
})

export const updateCampaign = ({ payload }) => ({
  type: UPDATE_CAMPAIGN_DATA,
  payload,
})

export const updateFilterName = payload => ({
  type: UPDATE_FILTER_NAME,
  payload,
})
