import * as React from 'react';
import { Card, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
`;

const StyledCard = styled(Card)`
    width: 400px;
    height: 250px;
`;

const InputContainer = styled.div`
    margin: 20px;
`;

const StyledButton = styled(Button)`
    margin: 30px auto;
    display: block;
    width: 100px;
    height: 40px;
`;

export const AdminLogin = (): JSX.Element => {
    return (
        <CardContainer>
            <StyledCard>
                <InputContainer>
                    <Input size="large" placeholder="Логин" suffix={<UserOutlined />} />
                </InputContainer>
                <InputContainer>
                    <Input.Password size="large" placeholder="Пароль" />
                </InputContainer>
                <StyledButton>Вход</StyledButton>
            </StyledCard>
        </CardContainer>
    );
};
