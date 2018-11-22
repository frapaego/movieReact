'use strict';

const CustomTableCell = withStyles( theme => ( {
    root: {
        color: '#3C4858',
        verticalAlign: 'middle',
    },
    head: {
        backgroundColor: '#398BD2',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#3C4858',
        verticalAlign: 'middle',
    },
    body: {
//        fontSize: 12,
    },
} ) )( TableCell );

const TotalTableCell = withStyles( theme => ( {
    root: {
        color: '#3C4858',
        verticalAlign: 'middle',
        backgroundColor: '#F9FAFC',
     },
} ) )( TableCell );

function TableIcon( props ) {
    return (
        <img src={props.src} border="0" />
    );
}

function desc( a, b, orderBy ) {
    if ( b[orderBy] < a[orderBy] ) {
        return -1;
    }
    if ( b[orderBy] > a[orderBy] ) {
        return 1;
    }
    return 0;
}

function stableSort( array, cmp ) {
    const stabilizedThis = array.map(( el, index ) => [el, index] );
    stabilizedThis.sort(( a, b ) => {
        const order = cmp( a[0], b[0] );
        if ( order !== 0 ) return order;
        return a[1] - b[1];
    } );
    return stabilizedThis.map( el => el[0] );
}

function getSorting( order, orderBy ) {
    return order === 'desc' ? ( a, b ) => desc( a, b, orderBy ) : ( a, b ) => -desc( a, b, orderBy );
}

class EnhancedTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort( event, property );
    };

    render() {
        const { rows, order, orderBy } = this.props;

        return (
            <TableHead>
                <TableRow>
                    {rows.map( row => {
                        return (
                            row.disableOrder ?
                                <CustomTableCell
                                    key={row.id}
                                    numeric={row.numeric}
                                    padding={row.disablePadding ? 'none' : 'default'}
                                >
                                    {row.label}
                                </CustomTableCell> :
                                <CustomTableCell
                                    key={row.id}
                                    numeric={row.numeric}
                                    padding={row.disablePadding ? 'none' : 'default'}
                                    sortDirection={orderBy === row.id ? order : false}
                                >
                                    <Tooltip
                                        title={row.label}
                                        placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                        enterDelay={300}
                                    >
                                        <TableSortLabel
                                            active={orderBy === row.id}
                                            direction={order}
                                            onClick={this.createSortHandler( row.id )}
                                        >
                                        {row.label}
                                        </TableSortLabel>
                                    </Tooltip>
                                </CustomTableCell>
                        );
                    }, this )}
                </TableRow>
            </TableHead>
        );
    }
}
