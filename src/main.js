/*gulp makeEntry  里生成main.js，main的模板在devTool里*/
import {
	StackNavigator
} from 'react-navigation';
//主入口组件
var entry = reactApp.params.entry;
var navigates = {};
navigates[entry] = {};
  
navigates['IndexTestIndex'] = {
	screen: require("./modules/index/testIndex.js").default
};
  
navigates['IndexTestIndex2'] = {
	screen: require("./modules/index/testIndex2.js").default
};

const app = StackNavigator(navigates);
export default app;