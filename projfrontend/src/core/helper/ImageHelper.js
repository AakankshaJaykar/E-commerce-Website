import React from "react";

const ImageHelper=({ product }) => {
    const iamgeurl=product
    ? product.image 
    :`https://www.pexels.com/photo/woman-in-brown-sleeveless-dress-and-blue-jeans-standing-on-gray-path-road-906106/`
    return (
        <div className="rounded border border-success p-2">
        <img
        src={iamgeurl}
        style={{ maxHeight: "100%" ,maxWidth:"100%" }}
        className="mb-3 rounded"
        alt=""
        />
        </div>
    );
};

export default ImageHelper;