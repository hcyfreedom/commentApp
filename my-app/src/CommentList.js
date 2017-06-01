/**
 * Created by hcy on 2017/6/1.
 */
import React from 'react'
import Comment from './Comment'
export default class CommentList extends React.Component{
    static defaultProps = {
        comments : []
    }

    render(){
        // 测试数据
        // const comments = [
        //     {username:'hcy',content:'a girl'},
        //     {username:'zhx',content:'360'},
        //     {username:'zfl',content:'小仙女~'}
        // ]

        // return(
        //     <div>
        //         {
        //             // 使用 map 构建一个存放 JSX 的数组
        //             comments.map((comment,i) => {
        //                 return(
        //                     <div key={i}>
        //                         {comment.username} : {comment.content}
        //                     </div>
        //                 )
        //
        //             })
        //         }
        //     </div>
        // )

        return(
            <div>
                {this.props.comments.map((comment,i) => <Comment comment={comment} key={i}/>
                )}
            </div>
        )
    }
}