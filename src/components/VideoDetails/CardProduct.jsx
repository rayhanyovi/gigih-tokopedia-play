import React from "react";
import { Link } from "react-router-dom";
import { Card, Space } from "antd";
const { Meta } = Card;
const CardProduct = ({ product }) => {
  return (
    <Space direction="vertical" size={16}>
      <a href={`${product.product_url}`}>
        {" "}
        {/* Tambahkan Link ke /videoDetails */}
        <Card
          hoverable
          style={{
            height: 400,
            width: 300,
          }}
          cover={
            <img
              style={{ height: 300, objectFit: "cover", marginBottom: "-10px" }}
              alt="example"
              src={`${product.product_thumbnail}`}
            />
          }>
          <Meta title={product.product_name} />
          <Meta
            title={`IDR ${product.price}`}
            description={`⭐ ${product.rating}`}
          />
        </Card>
      </a>
    </Space>
  );
};
export default CardProduct;
