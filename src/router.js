import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import CampaignList from 'components/CampaignList'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={CampaignList} />
      </Switch>
    </Router>
  </Provider>
)

export default Root
