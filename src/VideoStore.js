import { observable, action } from 'mobx'
import Socket from './socket'

class VideoStore {
  @observable videoUrl = ''
  @observable playing = false

  @action
  setVideoUrl(url) {
    this.videoUrl = url
  }

  playVideo(url) {
    Socket.emit('setVideoUrl', url)
  }
}

export default new VideoStore()
