
# 特性
1、 react react-native

2、redux  （5.0.5）

3、gulp CLI version 1.3.0 , Local version 4.0.0-alpha.2（工作流，比如文件改变，自动载入组件）



# 作者开发环境

npm 4.6.1   版本需要小于 5.0.1 

node v4.6.0





# 开始
react-native init AwesomeProject

git clone https://github.com/wenzouquan/react-dome.git AwesomeProject

cd AwesomeProject


npn install


react-native run-android


gulp






# 添加新模块



1、那么可以在根目录（react-dome）下执行 npm run mod index/index/index , 这样就会在 src/modules目录，生成对应的模块

2、通过路由访问模块 navigate('indexIndexIndex', { name: 'Jane' })



# 模块目录


这样我们团队成员，只需在自己的模块下就可以完成所有的工作 比如 css 修改  , 数据与服务器对接 。 各自完成自己的模块开发，就算某个模块出错也不影响其它模块正常运行。






# redux对象store

1、获取模块的store

reactApp.getStore("user/index/index") ; //返回的是 user/index/index.store.js 的redux对象

2、监听store里的state对象发生变化

var unwatch = reactApp.getStore("user/index/index").watch("userInfo",function(newVal,oldVal){

	console.log(newVal);
	
}) 

3、在外部直接修改state

reactApp.getStore("user/index/index").setState({key:vaule}) ;

4、在外部调用store里方法

reactApp.getStore("user/index/index").call(type, params); //可以在外部直接调用方法 



就是那么简单，clone 下来改吧改吧， 。。。 时间有限，还有很多需要改进的 ，欢迎给我建议或意见，谢谢大家














