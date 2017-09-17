let initialState = {

  state: {
    count: 0,
    movieUrl: 'http://boxphp.oss-cn-hangzhou.aliyuncs.com/video/UpBluRay/0_848x476.mp4',
    showChineseStatus: 'none',
    showSearchWords: 'none',
    searchWordInfo: {
      parts: []
    },
    engWord: 'ideo continues to play when',
    chineseWord: '需要给用户提供视觉反馈'
  },

  loadStart: function(_this) {
    console.log("loadStart");
  },
  setTime: function(data) {
    //console.log("setTime");
    //console.log(data);
  },
  setDuration: function() {

  },
  onEnd: function() {
    console.log("onEnd");
  },
  videoError: function(e) {
    console.log(e);
  },
  screenTouch: function(_this) {

  },

  playSound: function(_this) {
    let mp3Url = _this.event;
    if (mp3Url) {
      //声音播放
      const Sound = require('react-native-sound');
      const s = new Sound(mp3Url, Sound.MAIN_BUNDLE, (e) => {
        if (e) {
          console.log('error', e);
        }
        s.play();
      });
    }
  },

  showChinese: function() {
    this.state.showChineseStatus = this.state.showChineseStatus == 'none' ? 'flex' : 'none';
  },
  searchWords: function(obj) {
    this.state.showSearchWords = 'flex';
    this.state.searchWordInfo.word = obj.event;
    let url = 'http://dict-co.iciba.com/api/dictionary.php?w=' + obj.event + '&key=2EAB7B39653B2440C7A53B2FE19F4C52&type=json';
    let _this = this;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let data = responseJson['symbols'][0];
        if (data['parts'] && data.parts.length > 0) {
          for (var k in data['parts']) {
            var one = data['parts'][k];
            data['parts'][k]['part'] = one['part'];
            data['parts'][k]['means'] = one['means'].join("；");
          }
        } else {
          data['parts'] = [];
        }

        data.word = obj.event;
        reactApp.stores.IndexIndexIndex.setState({
          searchWordInfo: data
        });
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

  },



  init: function() { //store,实例化会执行一次
    console.log(this.state);
    if (this.state.params && this.state.params.movieUrl) {
      this.state.movieUrl = this.state.params.movieUrl;
    }
  }
};
export default new reactApp.reducer(initialState);