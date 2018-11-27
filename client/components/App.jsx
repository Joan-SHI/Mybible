import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import ReactForm from './ReactForm'
import ReadForm from './ReadForm'
import DeleteForm from './DeleteForm'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
    <ReactForm />
    <ReadForm />
    <DeleteForm />
  </div>
)

export default App
