import * as React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export const ProductCard = (): JSX.Element => {
    return (
        <Card
            hoverable
            style={{ width: 240, marginRight: 30 }}
            cover={
                <img
                    alt="example"
                    src="https://www.ikea.com/ru/ru/images/products/rajtan-spice-jar__25715_PE079860_S5.JPG?f=xs"
                />
            }
        >
            <Meta title="ШОТТИС" description="Жалюзи, белый90x190 см" />
        </Card>
    );
};
