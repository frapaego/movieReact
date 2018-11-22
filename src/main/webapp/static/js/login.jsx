'use strict';

const { createMuiTheme,
    withStyles,
    CssBaseline,
    MuiThemeProvider,
    AppBar,
    Toolbar,
    Typography,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    TextField } = window['material-ui'];

const theme = createMuiTheme( {
    typography: {
        useNextVariants: true,
        fontSize: 12,
    },
    palette: {
        type: 'light',
        primary: {
            main: '#398BD2',
        },
    },
    overrides: {
        MuiIconButton: {
            root: {
                color: 'inherit',
            },
            disabled: {
                color: 'lightgray',
            },
        },
    },
} );

const styles = theme => ( {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
} );

class LoginAppBar extends React.Component {

    render() {
        return (
            <div id="loginApp" theme={theme}>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <div className="loginForm">
                        <AppBar position="static" color="default">
                            <Toolbar>
                                <Typography variant="h6" color="inherit">
                                    Movie REACT JS
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

ReactDOM.render(
    <LoginAppBar />,
    document.getElementById( 'login-app-bar' )
)

const CustomFormControlLabel = withStyles( theme => ( {
    root: {
        marginLeft: 0,
    },
} ) )( FormControlLabel );

class LoginForm extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange = event => {
        this.setState( {
            [event.target.id]: event.target.value
        } );
    }

    handleSubmit( event ) {
        event.preventDefault();
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <div theme={theme}>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <div id="loginContent">

                        <FormControl component="fieldset">
                            <CustomFormControlLabel
                                control={
                                    <TextField
                                        required
                                        id="username"
                                        name="username"
                                        label="Usuario"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        margin="dense"
                                        variant="outlined"
                                    />
                                }
                            />
                            <CustomFormControlLabel
                                control={
                                    <TextField
                                        required
                                        type="password"
                                        id="password"
                                        name="password"
                                        label="Clave"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        margin="dense"
                                        variant="outlined"
                                    />
                                }
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                size="large"
                                disabled={!this.validateForm()}>Login
                             </Button>
                        </FormControl>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

ReactDOM.render(
    <LoginForm />,
    document.getElementById( 'login-form-content' )
)
