import React from 'react';
import {formatTime} from '../helper/index';
import {Box, Grid, Paper, TextField } from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup } from '@material-ui/lab';


const Notetaking = ({curPinIndex, playTimeArr}) => {
    // fetch pin data here
    // todo...

    const [pinType, setPinType] = React.useState('');

    const handleAlignment = (event, newAlignment) => {
        setPinType(newAlignment);
    };

    return (
        <Grid item xs={12} sm={8}>
            <Paper >
                <Box m={2} height={600}>
                    <Box fontStyle="italic" fontSize={18}>
                        The session was pinned at {formatTime(playTimeArr[curPinIndex])}
                    </Box>
                    <Box textAlign="center" fontSize={18} fontWeight="fontWeightMedium" m={2}> 
                        Would you like to take some notes for this pin?
                    </Box>
                    <TextField
                        id="outlined-secondary"
                        label="Personal Notes..."
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <Box my={1} fontStyle="italic" fontSize={18}> To share with your peer:</Box>
                    <Box textAlign="center" fontSize={18} fontWeight="fontWeightMedium" m={2}> 
                        What is your perspective of what happened at this pin? 
                    </Box>
                    <TextField
                        id="outlined-secondary"
                        label="Type a response..."
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <Box textAlign="center" fontSize={18} fontWeight="fontWeightMedium" m={2}> 
                        What would you categorize this pin as?
                    </Box>       
                    <Box align="center" m = {3}>          
                        <ToggleButtonGroup
                            value={pinType}
                            exclusive
                            onChange={handleAlignment}
                            size = "large"
                        >
                            <ToggleButton value="strength" >
                                Strength
                            </ToggleButton>
                            <ToggleButton value="opportunity">
                                Opportunity
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>   
                </Box>
            </Paper>

        </Grid>
    );
};

export default Notetaking;