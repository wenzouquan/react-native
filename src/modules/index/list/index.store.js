let initialState = {
  state: {
    count: 0,
    movieList: [{
      title: '乱世佳人',
      url: 'http://boxphp.oss-cn-hangzhou.aliyuncs.com/video/UpBluRay/0_848x476.mp4'
    }]
  },
  playMovie: function(action) {
    console.log(action);
  }
};
export default new reactApp.reducer(initialState);