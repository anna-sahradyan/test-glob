import React, {useState} from 'react';
import {fetchGetUser} from "../../redux/usersSlice";
import {useDispatch} from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import {IconButton, InputBase, Paper} from "@mui/material";
import toast from "react-hot-toast";

const SearchUser = () => {
    const dispatch = useDispatch();
    const [filterTerm, setFilterTerm] = useState('');
    const [fadeOut, setFadeOut] = useState(false);
    const handleFilterChange = (event) => {
        setFilterTerm(event.target.value);
    };
    const handleSearchClick = async () => {
        if (filterTerm.trim() !== '') {
            const user = await dispatch(fetchGetUser(filterTerm.trim()));
            if (user.payload.length === 0) {
                toast.error('User not found 🙄');
                setFadeOut(true);
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            }
            clearTimeout();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearchClick();
        }
    };

    return (
        <>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '18px',
                    height: "48px",
                    opacity: fadeOut ? 0.3 : 1,
                    transition: 'opacity 0.5s ease'
                }}
                tabIndex={0}
                onKeyDown={handleKeyPress}>
                <InputBase
                    sx={{
                        ml: 1, flex: 1,
                    }}
                    placeholder="Search Users By Name"
                    value={filterTerm}
                    inputProps={{'aria-label': 'Search Books'}}
                    onChange={handleFilterChange}
                />
                <IconButton type="button" sx={{p: '10px', margin: "14px 26.39px 14.39px 0"}} aria-label="search"
                            onClick={handleSearchClick}>
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </>
    );
};

export default SearchUser;