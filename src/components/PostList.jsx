import React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не были найдены!
            </h1>
        );
    };

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, idx) => 
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem 
                            remove={remove}
                            post={post} 
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;