export const state = () => ({
  isLoaded: false,
  musicData: null,
  playing: false,
  source: null,
  musicBuffer: null,
  pausedAt: null,
  analyser: null,
  ctxAudio: null,
})

export const getters = {
  getAnalyser: (state) => state.analyser,
}

export const actions = {
  loadSound({ state, commit }, url) {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.responseType = 'arraybuffer'
    // Decode asynchronously
    request.onload = function () {
      if (request.status === 200) {
        state.ctxAudio.decodeAudioData(request.response, function (buffer) {
          commit('isLoaded')
          commit('setMusicBuffer', buffer)
        })
      }
    }
    request.send()
  },
  toggleMusic({ state, commit }) {
    if (state.playing) {
      commit('stopMusic')
    } else {
      commit('playMusic')
    }
    commit('togglePlay')
  },
}

export const mutations = {
  togglePlay(state) {
    state.playing = !state.playing
  },
  isLoaded(state) {
    state.isLoaded = true
  },
  setMusicData(state, musicData) {
    state.musicData = musicData
  },
  setCtxAudio(state, ctxAudio) {
    state.ctxAudio = ctxAudio
  },
  setSource(state, source) {
    state.source = source
  },
  setMusicBuffer(state, musicBuffer) {
    state.musicBuffer = musicBuffer
  },
  playMusic(state) {
    state.analyser = state.ctxAudio.createAnalyser()
    state.source = state.ctxAudio.createBufferSource()
    state.source.buffer = state.musicBuffer // This is the line that generates the error
    if (!state.pausedAt) {
      state.source.loop = true
    }
    state.source.connect(state.analyser)
    state.analyser.connect(state.ctxAudio.destination)
    state.source.connect(state.ctxAudio.destination)

    if (state.pausedAt) {
      state.source.start(0, state.pausedAt + 0.3)
    } else {
      state.source.start(0)
    }
  },
  stopMusic(state) {
    state.pausedAt = state.ctxAudio.currentTime
    state.source.stop(state.pausedAt + 0.3)
  },
}
