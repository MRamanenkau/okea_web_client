import * as React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
`;

const AdminLoginRaw = ({ className }: any): JSX.Element => {
    return (
        <CardContainer>
            <Card className={className}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </CardContainer>
    );
};

export const AdminLogin = styled(AdminLoginRaw)`
    width: 300px;
`;
