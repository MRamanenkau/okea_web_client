import * as React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import authentication from '../helpers/Authentication';
import { validationConstants } from '../constants/validation';

const StyledForm = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
`;

const StyledCard = styled(Card)`
    width: 480px;
    height: 310px;
`;

const InputContainer = styled.div`
    margin: 20px;
    height: 50px;
`;

const StyledButton = styled(Button)`
    margin: 80px auto;
    display: block;
    width: 100px;
    height: 40px;
`;

const StyledErrorLabel = styled.p`
    left: 150px;
    color: #ff4d4f;
    position: absolute;
`;

const emailValidationRules = [
    { required: true, message: validationConstants.REQUIRED_FIELD_MESSAGE },
    { max: validationConstants.MAX_FIELD_LENGTH, message: validationConstants.MAX_FIELD_LENGTH_MESSAGE },
    { pattern: validationConstants.EMAIL_VALIDATION_PATTERN, message: validationConstants.INVALID_EMAIL_MESSAGE },
];

const passwordValidationRules = [
    { required: true, message: validationConstants.REQUIRED_FIELD_MESSAGE },
    { max: validationConstants.MAX_PASSWORD_LENGTH, message: validationConstants.MAX_FIELD_LENGTH_MESSAGE },
    { pattern: validationConstants.PASSWORD_VALIDATION_PATTERN, message: validationConstants.INVALID_PASSWORD_MESSAGE },
];

export const AdminLogin = (): JSX.Element => {
    const [form] = Form.useForm();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isAuthenticationInProgress, setIsAuthenticationInProgress] = React.useState(false);
    const [isForbidden, setForbidden] = React.useState(false);
    const history = useHistory();
    const location = useLocation();

    React.useEffect(() => {
        if (email && password) {
            form.validateFields().catch(() => {
                setIsAuthenticationInProgress(false);
                return;
            });

            const { from } = (location.state as any) || { from: { pathname: '/' } };

            authentication
                .authenticate(email, password)
                .then(() => {
                    history.replace(from);
                    history.push('/admin-panel');
                })
                .catch(() => {
                    setForbidden(true);
                });
        }

        setIsAuthenticationInProgress(false);
    }, [isAuthenticationInProgress]);

    const redirectToProp = {
        pathname: '/admin-panel',
        state: { from: location },
    };

    return authentication.isAuthenticated() ? (
        <Redirect to={redirectToProp} />
    ) : (
        <StyledForm form={form} onFieldsChange={() => setForbidden(false)}>
            <StyledCard>
                <InputContainer>
                    <Form.Item name="email" rules={emailValidationRules} validateTrigger="onSubmit">
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            size="large"
                            placeholder="Электронная почта"
                            suffix={<UserOutlined />}
                        />
                    </Form.Item>
                </InputContainer>
                <InputContainer>
                    <Form.Item name="password" rules={passwordValidationRules} validateTrigger="onSubmit">
                        <Input.Password
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            size="large"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                </InputContainer>
                {isForbidden && <StyledErrorLabel>Неверный логин или пароль</StyledErrorLabel>}
                <StyledButton
                    loading={isAuthenticationInProgress}
                    htmlType="submit"
                    onClick={() => setIsAuthenticationInProgress(true)}
                >
                    Вход
                </StyledButton>
            </StyledCard>
        </StyledForm>
    );
};
