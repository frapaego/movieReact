'use strict';

const CustomExpansionPanel = withStyles( theme => ( {
    root: {
        color: '#3C4858',
        verticalAlign: 'middle',
        margin: theme.spacing.unit * 5,
        width: '80%',
        backgroundColor: '#F9FAFC',
    },
} ) )( ExpansionPanel );

const CustomExpansionPanelSummary = withStyles( theme => ( {
    root: {
        color: '#3C4858',
        verticalAlign: 'middle',
        backgroundColor: '#C2D0EC',
        fontWeight: 'bold',
    },
} ) )( ExpansionPanelSummary );

const CustomList = withStyles( theme => ( {
    root: {
        width: '100%',
    },
} ) )( List );

const CustomListItemText = withStyles( theme => ( {
    root: {
        color: '#3C4858',
        verticalAlign: 'middle',
    },
    primary: {
        color: '#3C4858',
        verticalAlign: 'middle',
    },
    secondary: {
        color: '#3C4858',
        verticalAlign: 'middle',
    },
} ) )( ListItemText );

class SwitchListSecondary extends React.Component {
    
    handleToggle = (value,column) => () => {
        this.props.onRequestCheck( value, column );
    };

    render() {
        const { title, items, checked, column, classes } = this.props;

        return (
            <div>
                <CustomExpansionPanel defaultExpanded={items.length > 0}>
                    <CustomExpansionPanelSummary expandIcon={<IconButton className="fas fa-angle-down" />} classes={styles.root}>
                        {title}
                    </CustomExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <CustomList dense={true}>
                            {items.map( item => {
                                return (
                                    <ListItem key={item.id}>
                                        <CustomListItemText primary={item.name} secondary={item.count} />
                                        <ListItemSecondaryAction>
                                            <Switch color="primary"
                                                onChange={this.handleToggle( item.id, column )}
                                                checked={checked.indexOf( item.id ) !== -1}
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>

                                )
                            }, this )}
                        </CustomList>
                    </ExpansionPanelDetails>
                </CustomExpansionPanel>
            </div>
        );

    }
}