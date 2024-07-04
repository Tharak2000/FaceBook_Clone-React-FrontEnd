import React from 'react'
import './post.css'


export default function Post() {
  return (
    <div className="post">
      <div className="postCantainer">
        <div className="postTop">
          <img src="/images/1.jpg" alt="" className="postImage" />
          <span className="postUserName">Tharanga S Karunarathna</span>
          <span className="postTime">5 mins ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">
            Hellow I am Batman...! You understand...!!!
          </div>
          <img src="/images/1.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <img src="/images/like.jpg" alt="" className="reactionPic" />
          <img src="/images/heart.jpg" alt="" className="reactionPic" />
          <img src="/images/care.jpg" alt="" className="reactionPic" />
          <img src="/images/haha.jpg" alt="" className="reactionPic" />
          <img src="/images/wow.jpg" alt="" className="reactionPic" />
          <img src="/images/sad.jpg" alt="" className="reactionPic" />
          <img src="/images/angry.jpg" alt="" className="reactionPic" />
          
          <span className="likeCount">Batman and 390 others</span>
          <div className="postBottomLeft"></div>
          </div>
          <span className="commentCount"> 15 comments</span>
        </div>
      </div>
    </div>
  )
}
