import React, { Component } from 'react'
import '../../../App.css'
import {connect} from 'react-redux'
import {toggleDrawer} from '../../../reducers/global'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../../components/common/header'
import { withRouter } from 'react-router'

class App extends Component {    
  render() {    
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header {...this.props} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(connect(
    (state) => ({
      initSearch: state.search.initSearch,
      openDrawer: state.global.openDrawer
    }),
    {toggleDrawer}
)(App))