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
    EMAIL: '',
    PASSWORD: '',
};

const LoginScreen = () => {
    const [ email, setEmail ] = useState(INITIALSTATE.EMAIL);
    const [ password, setPassword ] = useState(INITIALSTATE.PASSWORD);

    const handleSubmit = () => {
        console.log({email, password});
        setEmail(INITIALSTATE.EMAIL);
        setPassword(INITIALSTATE.PASSWORD);
        Keyboard.dismiss();
    };

    return (
        <Container>
            <InnerContainer>
                <PageHeader style={{paddingTop: 32}}>Увійти</PageHeader>
                <Form style={{paddingBottom: 132}}>
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
                    <BtnPrime onPress={handleSubmit}>Увійти</BtnPrime>
                    <BtnAdditional style={{marginTop: 16, alignSelf: 'center'}}>
                        Немає акаунту? Зареєструватися
                    </BtnAdditional>
                </Form>
            </InnerContainer>
        </Container>
    );
};

export default LoginScreen;