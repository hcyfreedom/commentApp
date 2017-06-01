/**
 * Created by hcy on 2017/6/1.
 */
import React from 'react'

export default class Comment extends React.Component{
    render(){
        return(
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span> :
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}