import React from 'react'

function Post() {
  return (
  <div className="post">
    <div className="image">
      <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*oF53_AT1RJuKJ3glp1Ctkg@2x.jpeg"/>
    </div>
    <div className="texts">
      <h2>Why Experienced Programmers Fail Coding Interviews</h2>
      <p className="info">
        <a className="author">Dawid Paszko</a>
        <time>2024-08-02 16:45</time>
      </p>
    <p className="summary">A friend of mine recently joined a FAANG company as an engineering manager, and found themselves in the position of recruiting for engineering candidates.”</p>
    </div>
    </div>
  )
}

export default Post