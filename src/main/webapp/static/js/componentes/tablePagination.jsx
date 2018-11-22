'use strict';

const { withStyles,
    IconButton } = window['material-ui'];

const StyledTablePagination = withStyles( theme => ( {
    root: {
        backgroundColor: '#F9FAFC',
        color: '#3C4858',
    },
    selectRoot: {
        backgroundColor: '#F9FAFC',
        color: '#3C4858',
    },
    select: {
        backgroundColor: '#F9FAFC',
        color: '#3C4858',
    },
    selectIcon: {
        color: '#c9c9c9',
    },
    menuItem: {
        backgroundColor: '#F9FAFC',
        color: '#3C4858',
    },
} ) )( TablePagination );

const IconPaginationButton = withStyles( theme => ( {
    disabled: {
        color: 'lightgray',
    },
} ) )( IconButton );

function TablePaginationIcon( props ) {
    return (
        <img src={props.src} border="0" />
    );
}

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage( event, 0 );
    };

    handleBackButtonClick = event => {
        this.props.onChangePage( event, this.props.page - 1 );
    };

    handleNextButtonClick = event => {
        this.props.onChangePage( event, this.props.page + 1 );
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max( 0, Math.ceil( this.props.count / this.props.rowsPerPage ) - 1 ),
        );
    };

    render() {
        const { count, page, rowsPerPage } = this.props;

        return (
            <div className="col-sm-2 col-md-4 col-lg-4 col-xl-4">
                <IconPaginationButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    color="inherit"
                    aria-label="Primera página"
                    className="fas fa-angle-double-left"
                >&nbsp;
                </IconPaginationButton>
                <IconPaginationButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    color="inherit"
                    aria-label="Página anterior"
                    className="fas fa-angle-left"
                >&nbsp;
                </IconPaginationButton>
                <IconPaginationButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil( count / rowsPerPage ) - 1}
                    color="inherit"
                    aria-label="Página siguiente"
                    className="fas fa-angle-right"
                >&nbsp;
                </IconPaginationButton>
                <IconPaginationButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil( count / rowsPerPage ) - 1}
                    color="inherit"
                    aria-label="Última página"
                    className="fas fa-angle-double-right"
                >&nbsp;
                </IconPaginationButton>
            </div>
        );
    }
}

const TablePaginationActionsWrapped = withStyles( theme => ( {
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
} ) )( TablePaginationActions );
