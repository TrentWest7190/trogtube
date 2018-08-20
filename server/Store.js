const { observable, action } = require('mobx')

class Store {
  constructor() {
    this.videoUrl = ''
    this.queue = []
  }

  setVideoUrl(url) {
    console.log('setting video url')
    this.videoUrl = url
  }

  queueUrl(url) {
    queue.push(url)
  }
}

module.exports = new Store()
