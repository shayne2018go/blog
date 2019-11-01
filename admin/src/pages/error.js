import React from 'react'

class Error extends React.Component {
  constructor() {
    super()
  }


  render () {
    return (
      <div className="login">
        <h1>page not found</h1>
      </div>
    )
  }
}



export {
  Error as default,
}