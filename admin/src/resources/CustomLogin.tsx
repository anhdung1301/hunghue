import React, { useState } from 'react';
import { Button, Container, Grid, TextField , Avatar, CssBaseline} from '@mui/material';
import { useLogin, useNotify, Notification } from 'react-admin';
import { makeStyles, createStyles } from '@mui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(() => createStyles({
    '@global': {
    },
    root: {
        backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
    },
    paper: {
        marginTop: useTheme().spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: useTheme().spacing(1),
        backgroundColor: useTheme().palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: useTheme().spacing(1),
    },
    submit: {
        margin: useTheme().spacing(3, 0, 2),
    },
}));
const CustomLogin  = () =>  {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login({ email, password });
        } catch (error) {
            notify('Invalid username or password');
        }
    };

    return (
        <Container maxWidth="xs" component="main">
            <CssBaseline classes={{ root: classes.root }} />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default CustomLogin;

