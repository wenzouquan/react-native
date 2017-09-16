//返回

import Store from "./index/index.store.js";
let View = require("./index/index.view.js");
//动作方法
function mapDispatchToProps(dispatch) {
	return {
		loadStart: (_this) => dispatch({
			type: 'loadStart',
			event: _this
		}),
		setTime: (data) => dispatch({
			type: 'setTime',
			event: data
		}),
		setDuration: () => dispatch({
			type: 'setDuration',
		}),
		onEnd: () => dispatch({
			type: 'onEnd',
		}),
		videoError: (e) => dispatch({
			type: 'videoError',
			event: e
		}),
		screenTouch: (_this) => dispatch({
			type: 'screenTouch',
			event: _this
		}),
		showChinese: () => dispatch({
			type: 'showChinese'
		}),
		searchWords: (word) => dispatch({
			type: 'searchWords',
			event: word
		}),
		playSound: (mp3Url) => dispatch({
			type: 'playSound',
			event: mp3Url
		}),
	}
}
let componentName = "index/index/index"; //组件名，不能重复,建议使用路径
const connectComponent = reactApp.connect(mapDispatchToProps, View, Store, componentName);
export default connectComponent;