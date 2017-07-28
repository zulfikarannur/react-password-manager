import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPassAsyncHanlder, getPassListAsyncHanlder} from '../actions/passList.js'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      form: {
        URL: '',
        username: '',
        password: '',
        createdAt: '',
        updatedAt: ''
      }
    }
    this.formChange = this.formChange.bind(this)
  }

  componentWillMount () {
    this.props.getPassListAsyncHanlder()
  }

  render () {
    return (
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <div className='card'>
            <header className='card-header'>
              <p className='card-header-title'>
                Password Form
              </p>
            </header>
            <div className='card-content'>
              <div className='field'>
                <label className='label'>
                  URL
                </label>
                <input className='input' type='text' placeholder='Input website url here...' value={this.state.form.url} onChange={this.formChange} name='url' />
              </div>
              <div className='field'>
                <label className='label'>
                  Username
                </label>
                <input className='input' type='text' placeholder='Input username here...' value={this.state.form.username} onChange={this.formChange} name='username' />
              </div>
              <div className='field'>
                <label className='label'>
                  Password
                </label>
                <input className='input' type='password' placeholder='Input password here...' value={this.state.form.password} onChange={this.formChange} name='password' />
              </div>
              <button className='button is-primary' onClick={() => {
                this.props.addPassAsyncHanlder(this.state.form)
              }}> Submit </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  formChange (event) {
    const oldState = this.state.form
    let newState = {}
    switch (event.target.name) {
      case 'url':
        newState = {...oldState, URL: event.target.value}
        this.setState({form: newState})
        break
      case 'username':
        newState = {...oldState, username: event.target.value}
        this.setState({form: newState})
        break
      case 'password':
        newState = {...oldState, password: event.target.value}
        this.setState({form: newState})
        break
      default:
        console.log('Event target miss')
    }
  }

}

const mapStateToProps = (state) => {
  return {
    passListReducer: state.passListReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPassAsyncHanlder: (form) => {
      dispatch(addPassAsyncHanlder(form))
    },
    getPassListAsyncHanlder: () => {
      dispatch(getPassListAsyncHanlder())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
