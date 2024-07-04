import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div>
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
            <img src="/images/1.jpg" alt="" className="addPostPic" />
            <input type="text" placeholder='Whats in your mind....?' className="addPostInput" />
        </div>
        <hr class="postHr"/>
        <div className="addPostBottom">
              <div className="addPostOptions">
                  <div className="addPostOption">
                  <InsertPhotoIcon htmlColor='Orange' className="addPhoto" />
                  <span className="addPostOptionText" >Add Photo/Vedio</span>
                  </div>
                  <div className="addPostOption">
                  <AddLocationAltIcon htmlColor='red' className="addPhoto" />
                  <span className="addPostOptionText">Add Location</span>
                  </div>
                  <div className="addPostOption">
                  <LocalOfferIcon htmlColor='blue' className="addPhoto" />
                  <span className="addPostOptionText">Add Tag</span>
                  </div>
                  <div className="addPostOption">
                  <LiveTvIcon style={{ color: "tomato" }} className="addPhoto" />
                  <span className="addPostOptionText">Go live</span>
                  </div>
              </div>
              <button className="postButton">POST</button>
        </div>
      </div>
    </div>
    </div>
  )
}
