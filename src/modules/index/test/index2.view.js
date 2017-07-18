//导入React
import React, {
  Component
} from 'react';

//视图组件
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export function header(navigation) {
  let name = '我的名字：' + navigation.state.params.name;
  return {
    title: name
  }
};


//视图组件
class ComponentView extends Component {
  render() {

    const {
      state,
      add
    } = this.props;
    console.log("state", state);
    return (
      <View >
          <View ><Text>{state.count}</Text></View>
          <Button title="点我，加1" onPress={(event)=> add(event)}/>
        </View>
    )
  }
}


export default ComponentView;