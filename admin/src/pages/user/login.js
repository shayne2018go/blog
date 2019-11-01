import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './user.scss'
import {LoginAction} from '~redux/actions'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    LoginAction: payload => dispatch(LoginAction(payload))
  }
}

class Login extends React.Component {
  constructor() {
    super()
  }


  render () {
    return (
      <div className="login">
        <h1>管理员登陆</h1>
        <LoginForm />
      </div>
    )
  }
}

class LoginForm extends React.Component {
  constructor() {
    super()
  }

  handleSubmit (e) {
    const {LoginAction} = this.props
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        LoginAction(values)
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="login-form user-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入您的用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
      </Form>
    )
  }
}

LoginForm = Form.create({ name: 'login-form' })(LoginForm)
LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export {
  Login as default,
  LoginForm
} 
// export default Login