import React from 'react'
import Navbar from './Navbar'
import StoriesList from './StoriesList'
import {connect} from 'react-redux'
import {fetchStories} from '../store/stories'

class Main extends React.Component {
  componentDidMount() {
    this.props.loadStories()
  }

  render () {
    return (
      <div id='main'>
        <div className='column container'>
          <div id='header'>
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <StoriesList />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // mapDispatchToProps makes available the redux functions to this compponent as props
    // loadStories dispatch the  fetchStories functions which will do axios call to our  db
    loadStories: () => dispatch(fetchStories())
  }
}

export default connect(null, mapDispatchToProps)(Main)
