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
  Button,
  TouchableOpacity
} from 'react-native';

import styles from "./index.css.js";
//sqlite
var sqlite = require('react-native-sqlite');
console.log(sqlite);
sqlite.open("filename.sqlite", function(error, database) {
  if (error) {
    console.log("Failed to open database:", error);
    return;
  }
  var sql = "SELECT a, b FROM table WHERE field=? AND otherfield=?";
  var params = ["somestring", 99];
  database.executeSQL(sql, params, rowCallback, completeCallback);

  function rowCallback(rowData) {
    console.log("Got row data:", rowData);
  }

  function completeCallback(error) {
    if (error) {
      console.log("Failed to execute query:", error);
      return
    }
    console.log("Query complete!");
    database.close(function(error) {
      if (error) {
        console.log("Failed to close database:", error);
        return
      }
    });
  }
});

export function header(navigation) {
  return {
    title: '视频列表'
  }
};


//视图组件
class ComponentView extends Component {
  render() {
    console.log(this.props);
    const {
      state,
      playMovie
    } = this.props;
    const {
      navigate
    } = this.props.navigation;
    return (
      <View style={{"flex": 1}}>
              {state.movieList.map(function(index, elem) {
            return <TouchableOpacity onPress={()=> navigate('IndexIndexIndex', {
            movieUrl: index.movieUrl,
            title:index.title,
          })}  style={styles.MovieList} ><Text>{index.title} </Text></TouchableOpacity>
              })}
          <View style={styles.Button} >    
           <Button  title="添加视频" onPress={()=>  ImagePickerIOS.canRecordVideos(() => alert('能获取视频'))}/>
          </View>
      </View>
    )
  }
}


export default ComponentView;