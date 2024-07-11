import React from 'react'
import ShowBox from "../showbox/ShowBox";
import ThumbNail from '../thumbnail/ThumbNail';

function ProductLightBox() {
  return (
    <div>
        <ShowBox imgUrl={"./src/assets/images/image-product-1.jpg"}/>
        <ThumbNail/>
    </div>
  )
}

export default ProductLightBox