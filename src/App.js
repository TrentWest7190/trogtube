import React, { Component } from 'react'
import Styled from 'styled-components'
import PlayerContainer from './components/PlayerContainer'
import StudioBar from './components/StudioBar'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const AppContainer = Styled.div`
  width: 50vw;
  height: 28.125vw;
`

@observer
class App extends Component {
  @observable studioOpen = true
  render() {
    return (
      <AppContainer>
        <PlayerContainer />
        {this.studioOpen && (
          <StudioBar onClosePress={() => (this.studioOpen = false)} />
        )}
        <button onClick={() => (this.studioOpen = true)}>Open Studio</button>
      </AppContainer>
    )
  }
}

export default App
