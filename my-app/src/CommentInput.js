/**
 * Created by hcy on 2017/6/1.
 */
import React from 'react'

export default class CommentInput extends React.Component{
    constructor(){
        super()
        this.state = {
            username : '',
            content : ''
        }
    }

    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }

    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state;
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }

    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input placeholder="您的昵称" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea placeholder="输入您的观点" value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}