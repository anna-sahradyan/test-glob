import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGetAllUsers} from "../../redux/usersSlice";
import SearchUser from "../search/SearchUser";
import {
    Department, Description, DescSpan, DescSpanInfo, Div, Inner,
    LoadingItem,
    ModalBox, TextSpan,
    Title,
    TitleBox, TitleDesc,
    UsersContainer,
    Wrapper
} from "./homeStyled";
import Loader from "../loading/Loader";
import User from "../usersBox/User";
import {Img, UserBox} from "../usersBox/userStyled";
import {IconButton} from "@mui/material";
import {BootstrapDialog} from "./dialogStyle";

const Home = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    console.log(users)
    useEffect(() => {
        dispatch(fetchGetAllUsers());
    }, []);
    const handleClose = () => {
        setOpen(false);
    };
    const handleUserClick = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    return (
        <Wrapper>
            <SearchUser/>
            <UsersContainer>

                {loading ? (
                    <LoadingItem><Loader/></LoadingItem>
                ) : (
                    users.map((item, index) => (
                        <UserBox key={index} onClick={() => handleUserClick(item)}>
                            <User item={item}/>
                        </UserBox>
                    ))
                )}
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >{selectedUser && (<>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 15,
                            top: 18,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <Img src="/img/close.svg" alt="close" width={20} height={20}
                        />
                    </IconButton>
                    <ModalBox>
                        <TitleBox>
                            <Title>{selectedUser.name}</Title></TitleBox>
                            <Inner >
                                <Div><TextSpan>Телефон:</TextSpan><DescSpan>{selectedUser.phone}</DescSpan></Div>


                                <Div><TextSpan>Почта:</TextSpan><DescSpan>{selectedUser.email}</DescSpan></Div>

                                <Div><TextSpan>Дата приема:</TextSpan><DescSpan>{selectedUser.hire_date}</DescSpan></Div>

                                <Div><TextSpan>Должность:</TextSpan><DescSpan>{selectedUser.department.split(' ')[0]}</DescSpan></Div>

                                <Department><TextSpan>Подразделение:</TextSpan><DescSpanInfo>{selectedUser.department}</DescSpanInfo>
                                </Department>
                                <TitleDesc>Дополнительная информация
                                </TitleDesc>
                                <Description>{selectedUser.position_name}</Description>

                            </Inner>
                    </ModalBox>

                </>)}
                </BootstrapDialog>
            </UsersContainer>
        </Wrapper>
    );
};

export default Home;