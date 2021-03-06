import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class CsvString extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.paper}>
                <Typography variant="display1" gutterBottom>
                    CSV Aggiornato
                </Typography>
                <Typography variant="subheading" gutterBottom>
                    Copia questo testo in un file vuoto e salvalo con estensione .csv
                </Typography>
                <hr/>
                <TextField
                    id="multiline-flexible"
                    multiline
                    rows={10}
                    rowsMax="20"
                    value={this.props.csvString}
                    disabled={true}
                    margin="normal"
                    fullWidth={true}
                />
            </div>
        );
    }
}

CsvString.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CsvString);
