import React from 'react'
import '../Styles/index.css'
function Sresult(props) {

  const imgurl = `https://source.unsplash.com/600x400?${props.value}`;
  return (
    <div>
        <img src={imgurl} alt='sfsdfh'/>
    </div>
  )
}

export default Sresult