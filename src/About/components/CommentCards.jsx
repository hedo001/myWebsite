import React from 'react'
import stl from './index.module.scss'

export  function CommentCards({nickname, comment, image}) {
  return (
    <div>
        <div className={stl.commentCard}>
            {/* <div className={stl.commentCardImage}>
            <img src={image} alt="Comment" />
            </div> */}
            <div className={stl.commentCardContent}>
            <h3>{nickname}</h3>
            <p>{comment}</p>
            </div>
        </div>
    </div>
  )
}
