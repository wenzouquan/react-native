//导入React
import React, {
	Component
} from 'react';
//导入样式
import styles from "./index.css.js";
//视图组件
import {
	TouchableHighlight,
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';


export function header(navigation) {
	return {
		title: '首页'
	}
};

//视图组件
class ComponentView extends Component {
	render() {
		//console.log(this.props);
		const {
			state,
			add
		} = this.props;
		const {
			navigate
		} = this.props.navigation;
		return (
			<View style={styles.container}>
		      
		      <Button  style={styles.mgt10} title="链接到index2" onPress={()=> navigate('IndexTestIndex2', {
				name: 'Jane'
			})}/>
	      </View>
		)
	}
}


export default ComponentView;