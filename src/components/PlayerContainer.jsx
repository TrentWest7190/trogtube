import React from 'react'
import ReactPlayer from 'react-player'
import { observer } from 'mobx-react'
import VideoStore from '../VideoStore'

@observer
class PlayerContainer extends React.Component {
  render() {
    return (
      <ReactPlayer
        url={VideoStore.videoUrl}
        width="100%"
        height="100%"
        volume={0}
        playing={VideoStore.playing}
      />
    )
  }
}

export default PlayerContainer