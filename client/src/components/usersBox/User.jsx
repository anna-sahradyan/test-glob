import React from 'react';
import {Email, Img, PhoneNum, SpanEmail, SpanPhone, Title, TitleBox, UsersInner, UsersItem} from "./userStyled";


const User = ({item}) => {

    return (
        <>
            <UsersItem>
                <UsersInner >
                    <TitleBox>
                        <Title>{item.name}</Title>
                    </TitleBox>
                    <PhoneNum><SpanPhone><Img src="/img/phone.svg" alt=""/></SpanPhone> {item.phone}</PhoneNum>
                    <Email><SpanEmail><Img src="/img/email.svg" alt=""/></SpanEmail> {item.email}</Email>
                </UsersInner>
            </UsersItem>

        </>
    );
};

export default User;