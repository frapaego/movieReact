'use strict';

const { createMuiTheme,
    withStyles,
    CssBaseline,
    MuiThemeProvider,
    AppBar,
    Toolbar,
    IconButton,
    Tooltip,
    Grid,
    Tabs,
    Tab } = window['material-ui'];

/**
 * Tema de Material-UI
 */
const theme = createMuiTheme( {
    typography: {
        useNextVariants: true,
        fontSize: 12,
    },
    palette: {
        type: 'dark',
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

/**
 * Estilos genéricos
 * @param {any} theme
 */
const styles = theme => ( {
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 200,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.light,
        },
        verticalAlign: 'middle',
    },
    wrapper: {
        fontSize: 14,
    },
    disabled: {
        color: 'lightgray',
    },
} );

/**
 * Personalización del componente IconButton para el botón de logout
 */
const LogoutIcon = withStyles( theme => ( {
    root: {
        float: 'right',
    },
} ) )( IconButton );

/**
 * Nuevo componente TabContainer
 * @param {any} props
 */
function TabContainer( props ) {
    return (
        <div id="tabContainer" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tab-pane" style={{ paddingTop: '5%' }}>
            {props.children}
        </div>
    );
}

/**
 * Nuevo componente MenuIcon
 * @param {any} props
 */
function MenuIcon( props ) {
    return (
        <img src={props.src} border="0" />
    );
}

const MenuAppBar = withStyles( theme => ( {
    root: {
        paddingLeft: theme.spacing.unit * 3,
        position: 'fixed',
    },
} ) )( AppBar );

const CustomAppBar = withStyles( theme => ( {
    root: {
        paddingLeft: theme.spacing.unit * 3,
    },
} ) )( AppBar );

const CustomGridItem = withStyles( theme => ( {
    item: {
        border: '1px solid #C2D0EC',
    },
} ) )( Grid );

function ObtenerFecha() {
    var meses = new Array( "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" );
    var diasSemana = new Array( "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" );
    var f = new Date();
    return ( diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() );

}

/**
 * 
 */
class MenuTabs extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            value: 0,
        };

    }

    handleChange = ( event, value ) => {
        this.setState( { value } );
    };

    render() {
        const { value } = this.state;

        return (
            <div className={styles.root} theme={theme}>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <MenuAppBar position="static" color="default">
                        <Toolbar>
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tooltip
                                    title="Home"
                                    placement="bottom-end"
                                    enterDelay={300}
                                >
                                    <Tab label="Home" icon={<MenuIcon src="resources/images/home.png" />} />
                                </Tooltip>
                            </Tabs>
                            <div className="Logout">
                                <Tooltip
                                    title="Logout"
                                    placement="bottom-end"
                                    enterDelay={300}
                                >
                                    <LogoutIcon href="logout" className="fas fa-power-off" />
                                </Tooltip>
                            </div>
                        </Toolbar>
                    </MenuAppBar>
                    {value === 0 && <TabContainer value="0">
                        &nbsp;
                    </TabContainer>}
                </MuiThemeProvider>
            </div>
        );
    }
}

ReactDOM.render(
    <MenuTabs />,
    document.getElementById( 'menu-content' )
)