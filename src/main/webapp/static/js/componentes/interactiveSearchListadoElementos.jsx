'use strict';

const { ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Switch } = window['material-ui'];

class InteractiveSearchListadoElementos extends React.Component {

    constructor( props ) {
        super( props );

    }

    handleRequestCheck = ( value, column ) => {
        this.props.handleRequestCheck( value, column );
        this.forceUpdate();
    };

    componentDidMount() {
        var self = this;

    }

    render() {
        const { filterColumns } = this.props;

        return (

            <div className={styles.tableWrapper}>
                {filterColumns.map( filter => {
                    return (
                        <div className={styles.tableWrapper} key={filter.id}>
                            <br />
                            <SwitchListSecondary
                                key={filter.id}
                                title={filter.title}
                                items={filter.items}
                                checked={filter.checked}
                                column={filter.column}
                                onRequestCheck={this.handleRequestCheck}
                            />
                        </div>
                    )
                }, this )}
                <br />
            </div>

        );
    }
}
