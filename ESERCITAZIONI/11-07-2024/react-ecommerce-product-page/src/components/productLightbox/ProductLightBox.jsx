import {useState} from 'react';
import ShowBox from "../showbox/ShowBox";
import ThumbNail from '../thumbnail/ThumbNail';
import classNames from 'classnames';
import styles from './ProductLightBox.module.css';

const products = [
    {
        id: self.crypto.randomUUID(),
        product: "./src/assets/images/image-product-1.jpg",
        thumbNail: "./src/assets/images/image-product-1-thumbnail.jpg"
    },
    {
        id: self.crypto.randomUUID(),
        product: "./src/assets/images/image-product-2.jpg",
        thumbNail: "./src/assets/images/image-product-2-thumbnail.jpg"
    },
    {
        id: self.crypto.randomUUID(),
        product: "./src/assets/images/image-product-3.jpg",
        thumbNail: "./src/assets/images/image-product-3-thumbnail.jpg"
    },
    {
        id: self.crypto.randomUUID(),
        product: "./src/assets/images/image-product-4.jpg",
        thumbNail: "./src/assets/images/image-product-4-thumbnail.jpg"
    }
]

function ProductLightBox() {

    const initialValue = products[0];
    const [selectedProduct, setSelectedProduct] = useState(initialValue);
    const handleClick = (id) => {
        const product = products.find(product => product.id === id)
        setSelectedProduct(product);
    }

    return (
        <div className={classNames(styles["product-lightbox"])}>
            <ShowBox imgUrl={selectedProduct.product} />
            <ul className={classNames(styles["thumbnail-list"])}>
                {
                    products.map((product) => {
                        return (
                            <li key={product.id} onClick={() => handleClick(product.id)}>
                                <ThumbNail thumbNail={product.thumbNail} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default ProductLightBox