import React from 'react'
import { connect } from 'react-redux'
import Login from '~src/pages/user/login'
import { UserInfoAction } from '~redux/actions'
import store from '~redux/store'

const mapStateToProps = (state) => {
  return {
    user: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserInfoAction: () => UserInfoAction(dispatch)
  }
}

class Index extends React.Component {
  constructor() {
    super()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  componentDidMount () {
    const { UserInfoAction } = this.props
    UserInfoAction()
  }

  storeChange () {
    // console.log(store.getState())
  }

  render () {
    let { login } = this.props.user
    let LoginPage = login ? LoginIndex : Login
    return (
      <div className="account">
        <LoginPage />
      </div>
    )
  }
}

class LoginIndex extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>login index</div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Index)