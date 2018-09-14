import campaignList from './campaignData'

import {
  DELETE_CAMPAIGN,
  GET_CAMPAIGN_DATA,
  HANDLE_PAGE_CANGE,
  UPDATE_CAMPAIGN_DATA,
  UPDATE_FILTER_NAME,
} from 'actions/CampaignAction'

const initialState = {
  campaignList,
  filterName: '',
  currentPage: 1,
  start: 1,
  totalCount: 0,
  data: [],
}

export default function reducer(state = initialState, { type, payload } = {}) {
  switch (type) {
    case HANDLE_PAGE_CANGE: {
      const { currentPage } = payload,
        start = (payload.currentPage - 1) * 10 + 1
      let data = [...state.campaignList]
      if (state.filterName.length > 0) {
        data = data.filter(
          data => data.campaignName.toLowerCase().indexOf(state.filterName.toLowerCase()) > -1
        )
      }
      const filterData = data.slice(start - 1, start + 9)
      return {
        ...state,
        currentPage,
        start,
        data: filterData,
        totalCount: data.length,
      }
    }

    case UPDATE_CAMPAIGN_DATA: {
      const index = state.data.findIndex(data => data.id === payload.id)
      return {
        ...state,
        data: [...state.data.slice(0, index), { ...payload }, ...state.data.slice(index + 1)],
      }
    }

    case GET_CAMPAIGN_DATA: {
      let data = [...state.campaignList]
      if (state.filterName.length > 0) {
        data = data.filter(
          row => row.campaignName.toLowerCase().indexOf(state.filterName.toLowerCase()) > -1
        )
      }
      const start = (state.currentPage - 1) * 10 + 1,
        filterData = data.slice(start - 1, start + 9)
      return {
        ...state,
        currentPage: 1,
        data: filterData,
        totalCount: data.length,
      }
    }

    case DELETE_CAMPAIGN: {
      const { id } = payload,
        index = state.campaignList.findIndex(data => data.id === id)
      const campaignList = [
        ...state.campaignList.slice(0, index),
        ...state.campaignList.slice(index + 1),
      ]
      let data = []
      if (state.filterName.length > 0) {
        data = state.campaignList.filter(
          row =>
            row.id !== id &&
            row.campaignName.toLowerCase().indexOf(state.filterName.toLowerCase()) > -1
        )
      } else {
        data = [...campaignList]
      }
      return {
        ...state,
        campaignList,
        data: data.slice(state.start - 1, state.start + 9),
        totalCount: data.length,
      }
    }

    case UPDATE_FILTER_NAME: {
      const { filterName } = payload
      let data = [...state.campaignList]
      if (filterName.length > 0) {
        data = data.filter(
          data => data.campaignName.toLowerCase().indexOf(filterName.toLowerCase()) > -1
        )
      }
      const filterData = data.slice(0, 9)
      return {
        ...state,
        currentPage: 1,
        data: filterData,
        totalCount: data.length,
        filterName,
      }
    }

    default:
      return state
  }
}
