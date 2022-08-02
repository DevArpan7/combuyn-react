import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';

const AddAddress = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <>
        <div className="forHeaderFix">
            <div className="mainTopBar">
                <div className="mainTopBar_left">
                    <Link className='topBackBtn' to="/home">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Add Address
                </div>          
            </div>
            <div className="editProfile">
                <form className="formWraper">.
                    <TextField
                        required
                        id=""
                        className="formField"
                        label="Full Name"
                        defaultValue=""
                        variant="standard" 
                        placeholder='Enter Your Name' 
                    />
                    <TextField 
                        required
                        sx={{ width: "100%", maxWidth: '100%' }}
                        className="formField"
                        id=""
                        label="Phone number "
                        placeholder='Enter Your Name' 
                        variant="standard" 
                    />
                    <TextField 
                        sx={{ width: "100%", maxWidth: '100%' }}
                        className="formField"
                        id=""
                        label="Add Alternate Phone Number"
                        placeholder='Enter Your Name' 
                        variant="standard" 
                    />
                    <FormControl className="formField" variant="standard" sx={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Apartment </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className="formField" variant="standard" sx={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Tower </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField 
                        sx={{ width: "100%", maxWidth: '100%' }}
                        className="formField"
                        id=""
                        label="Flat Number"
                        placeholder='Enter Your Name' 
                        variant="standard" 
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl className="formField" variant="standard" sx={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-standard-label">City </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={age}
                                    onChange={handleChange}
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className="formField" variant="standard" sx={{ width: '100%' }}>
                                <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={age}
                                    onChange={handleChange}
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <RadioGroup
                        className='addressType'
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel className='radioText' value="home" control={<Radio className='radioInput' />} label={<><i className="far fa-home"></i> Home</>} />
                        <FormControlLabel className='radioText' value="work" control={<Radio className='radioInput' />} label={<><i className="far fa-briefcase"></i> Work</>} />
                    </RadioGroup>
                    <div className="footBtnWrap">
                        <Button className="payNowBtn" variant="contained" component={Link} to="/deliveryaddress">Save address and proceed</Button>
                    </div>
                </form>
            </div>            
        </div>
    </>
  )
}

export default AddAddress