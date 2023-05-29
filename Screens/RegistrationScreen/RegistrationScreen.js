import { useState } from "react";
import { Keyboard } from "react-native";

import {
    Container,
    InnerContainer,
    PageHeader,
    Form,
    FormInput,
    FormSecretInput,
    BtnPrime,
    BtnAdditional,
} from "../../components";

const INITIALSTATE = {
    LOGIN: '',
    EMAIL: '',
    PASSWORD: '',
};

const RegistrationScreen = () => {
    const [ login, setLogin ] = useState(INITIALSTATE.LOGIN);
    const [ email, setEmail ] = useState(INITIALSTATE.EMAIL);
    const [ password, setPassword ] = useState(INITIALSTATE.PASSWORD);

    const handleSubmit = () => {
        console.log({login, email, password});
        setLogin(INITIALSTATE.LOGIN);
        setEmail(INITIALSTATE.EMAIL);
        setPassword(INITIALSTATE.PASSWORD);
        Keyboard.dismiss();
    };

    return (
        <Container>
            <InnerContainer>
                <PageHeader>Реєстрація</PageHeader>
                <Form>
                    <FormInput
                        placeholder='Логін'
                        value={login}
                        onChangeText={value => setLogin(value)}
                    />
                    <FormInput
                        placeholder='Адреса електронної пошти'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                    <FormSecretInput
                        placeholder='Пароль'
                        value={password}
                        onChangeText={value => setPassword(value)}
                    />
                    <BtnPrime onPress={handleSubmit}>Зареєстуватися</BtnPrime>
                    <BtnAdditional style={{marginTop: 16, alignSelf: 'center'}}>
                        Вже є акаунт? Увійти
                    </BtnAdditional>
                </Form>
            </InnerContainer>
        </Container>
    );
};

export default RegistrationScreen;