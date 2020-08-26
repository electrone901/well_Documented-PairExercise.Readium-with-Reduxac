import React from 'react'
import { connect } from 'react-redux'

const StoriesList = (props) => {
   // passes  stories  as props
  const stories = props.stories
  return (
    <div id='stories' className='column'>
      {
        stories.map(story => (
          <div className='story' key={story.id}>
            <a>
              <h3>{story.title}</h3>
            </a>
            <a>
              <p>{story.author.name}</p>
            </a>
            <hr />
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // mapStateToProps makes available the redux state to this compponent as props
    // gets stories from redux store
    stories: state.stories
  }
}

export default connect(mapStateToProps)(StoriesList)
