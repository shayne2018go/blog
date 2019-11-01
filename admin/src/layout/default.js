import React from 'react'
import { BrowserRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

import routes from '~router/index'

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <Layout>
        <Header>
          header
        </Header>
        <Content>
          <Switch>
            {
              routes.map((route, index) => {
                return <Route path={route.path} key={index} exact={route.exact || false}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )
                  }
                />
              })
            }
          </Switch>
        </Content>
        <Footer style={{ "backgroundColor": '#000' }}>Footer</Footer>
      </Layout>
    )
  }
}

export default withRouter(DefaultLayout)