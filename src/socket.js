import VideoStore from './VideoStore'
import openSocket from 'socket.io-client'
const socket = openSocket()

socket.on('videoUrlSet', url => {
  VideoStore.setVideoUrl(url)
})

export default socket