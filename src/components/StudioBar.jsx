import React from 'react'
import Styled from 'styled-components'
import VideoStore from '../VideoStore'
import { observable } from 'mobx'

export default class StudioBar extends React.Component {
  @observable url = 'https://www.youtube.com/watch?v=bIjrSvGddDQ'
  render() {
    return (
      <Container>
        <Close onClick={this.props.onClosePress}/>
        <input onChange={e => (this.url = e.target.value)} />
        <button onClick={() => VideoStore.playVideo(this.url)}>Play Vid</button>
      </Container>
    )
  }
}

const Container = Styled.div`
  width: 300px;
  height: 100%;
  border: blue 1px solid;
  position: absolute;
  right: 0;
  top: 0;
`

const Close = Styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  :after {
    content: 'Close'
  }

  &:hover {
    color: red;
  }
`
