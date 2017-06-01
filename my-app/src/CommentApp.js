/**
 * Created by hcy on 2017/6/1.
 */
import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends React.Component{
    constructor(){
        super()
        this.state = {
            comments : []
        }
    }

    handleSubmitComment(comment){
        // 通过CommentInput调用回调函数传值，CommentApp父组件已经拿到了写入的value
        console.log(comment);

        if(!comment) return;
        if (!comment.username) return alert('请输入用户名');
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.unshift(comment);
        this.setState({
            comments:this.state.comments
        })
    }

    render(){
        return(
            <div className="wrap">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                {/*onSubmit是一个属性*/}

                <CommentList comments = {this.state.comments}/>
            </div>
        )
    }
}