# commentApp
React实现评论功能。

#### 使用*create-react-app*构建一个新的工程目录:
安装方法：
+ `npm install -g create-react-app`
+ `create-react-app my-app`  创建了一个叫my-app的工程
+ `cd my-app`
+ `npm start`

打开localhost:3000/即可。
#### 关于*create-react-app*可参考[此处](https://github.com/facebookincubator/create-react-app)它会生成自己的README文件和Gitignore。
然后在/my-app/src/目录下新建四个文件，分别是
+ CommentApp，是最外层组件，包括两个子组件CommentInput和CommentList
+ CommentInput，显示输入框
+ CommentList，显示评论信息，包括一个子组件Comment
+ Comment，具体的评论信息

### CommentInput
首先要要给需要输入的`<inout/>` 和 `<textarea/>`加上onChange事件的监听。
其次，我们要把CommentInput的内容传递到CommentList里，这样的话，需要CommentAPP做桥梁。
所以当用户点击发布按钮的时候，我们就将 CommentInput 的 state 当中最新的评论数据传递给父组件 CommentApp ，然后让父组件把这个数据传递给 CommentList 进行渲染。

CommentInput 如何向 CommentApp 传递的数据？父组件 CommentApp 只需要通过 props 给子组件 CommentInput 传入一个回调函数。当用户点击发布按钮的时候，CommentInput 调用 props 中的回调函数并且将 state 传入该函数即可。

在发布按钮上绑定一个click事件。

![Alt text](/my-app/imgs/1.png)

![Alt text](/my-app/imgs/2.png)

### CommentApp
此时就要通过传入的回调来获取到新增的评论数据
![Alt text](/my-app/imgs/3.png)

### CommentList 
CommentList 的数据应该是由父组件 CommentApp 传进来的，删除测试数据，改成从 props 获取评论数据;
并且为了防止报错，我们给 CommentList 加上 defaultProps 防止 comments 不传入的情况.
在 CommentApp 的 state 中初始化一个数组，来保存所有的评论数据，并且通过 props 把它传递给 CommentList。

修改 handleSubmitComment ：每当用户发布评论的时候，就把评论数据插入 this.state.comments 中，然后通过 setState 把数据更新到页面上

### 以上。参考：[胡子大哈](http://huziketang.com/books/react/)

                 