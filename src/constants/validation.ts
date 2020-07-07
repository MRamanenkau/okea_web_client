const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 16;
const MAX_FIELD_LENGTH = 255;

export const validationConstants = {
    // eslint-disable-next-line max-len
    EMAIL_VALIDATION_PATTERN: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD_VALIDATION_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    INVALID_EMAIL_MESSAGE: 'Введите валидный адрес электронной почты',
    INVALID_PASSWORD_MESSAGE:
        `Пароль должен содеражть минимум ${MIN_PASSWORD_LENGTH} символов, одну заглавную букву, ` +
        'одну строчную букву, одну цифру и один символ ',
    MAX_FIELD_LENGTH_MESSAGE: `Максимальная длина ${MAX_FIELD_LENGTH} символов`,
    MAX_PASSWORD_LENGTH_MESSAGE: `Максимальная длина пароля ${MAX_PASSWORD_LENGTH} символов`,
    REQUIRED_FIELD_MESSAGE: 'Обязательне поле',
    MAX_FIELD_LENGTH,
    MAX_PASSWORD_LENGTH,
};
