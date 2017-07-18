//返回

import Store from "./test/index2.store.js";
let View = require("./test/index2.view.js");
//动作方法
function mapDispatchToProps(dispatch) {
	return {
		add: (_this) => dispatch({
			type: 'add',
			event: _this
		})
	}
}
let componentName = "index/test/index2"; //组件名，不能重复,建议使用路径
const connectComponent = reactApp.connect(mapDispatchToProps, View, Store, componentName);
export default connectComponent;