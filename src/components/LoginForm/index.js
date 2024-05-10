// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    passWord: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    const {userName, passWord} = this.state
    const userDetails = {userName: userName, passWord: passWord}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passWord: event.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website"
          className="website-logo"
        />
        <form onSubmit={this.submitForm} className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website"
            className="nxtTrenz-image"
          />

          <label htmlFor="userName" className="labelEl">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="userName"
            placeholder="Username"
            className="input-name-field"
            onChange={this.onChangeUserName}
          />
          <br />
          <label htmlFor="passWord" className="labelEl">
            PASSWORD
          </label>
          <br />
          <input
            type="Password"
            id="passWord"
            placeholder="Password"
            className="input-pass-field"
            onChange={this.onChangePassword}
          />

          <br />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default LoginForm
// import {Component} from 'react'

// import './index.css'

// class LoginForm extends Component {
//   state = {
//     username: '',
//     password: '',
//   }

//   onSubmitSuccess = () => {
//     const {history} = this.props
//     history.replace('/')
//   }

//   submitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(response)
//     console.log(data)
//     if (response.ok === true) {
//       this.onSubmitSuccess()
//     }
//   }

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   renderPasswordField = () => {
//     const {password} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="password">
//           PASSWORD
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="password-input-filed"
//           value={password}
//           onChange={this.onChangePassword}
//         />
//       </>
//     )
//   }

//   renderUsernameField = () => {
//     const {username} = this.state
//     return (
//       <>
//         <label className="input-label" htmlFor="username">
//           USERNAME
//         </label>
//         <input
//           type="text"
//           id="username"
//           className="username-input-filed"
//           value={username}
//           onChange={this.onChangeUsername}
//         />
//       </>
//     )
//   }

//   render() {
//     return (
//       <div className="login-form-container">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           className="login-website-logo-mobile-image"
//           alt="website logo"
//         />
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//           className="login-image"
//           alt="website login"
//         />
//         <form className="form-container" onSubmit={this.submitForm}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//             className="login-website-logo-desktop-image"
//             alt="website logo"
//           />
//           <div className="input-container">{this.renderUsernameField()}</div>
//           <div className="input-container">{this.renderPasswordField()}</div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

// export default LoginForm
