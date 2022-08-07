import React from 'react'
import OrderTopBar from './OrderTopBar'
import { Button } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';

const RaiseIssue = () => {

    const [issue, setIssue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setIssue(event.target.value);
  };
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <OrderTopBar />
            <div className='reasonWrap'>
                <FormControl variant="standard" sx={{ m: 0, minWidth: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">Raise Issue</InputLabel>
                    <Select fullWidth
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={issue}
                    onChange={handleChange}
                    label="Raise Issue"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Item Missing</MenuItem>
                    <MenuItem value={20}>Item Damaged</MenuItem>
                    <MenuItem value={30}>Received wrong item</MenuItem>
                    <MenuItem value={40}>Others issue</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='reasonWrap'>
                <FormControl>    
                    <FormLabel>Select item</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Chocolate Marble Cake " />
                        <FormControlLabel control={<Checkbox />} label="Pineapple Tea cake" />
                    </FormGroup>
                </FormControl>
            </div>
            <div className='formWrap'>
                <TextField fullWidth focused
                    id="standard-textarea"
                    label="Write your quiry"
                    placeholder="Your comments"
                    multiline
                    variant="standard"
                />
            </div>
            <div className='addPhotoBox'>
                <p>You can upload photo related to unboxing.</p>

                <div className="uploadPhoto">
                    <input type="file" />
                    <span><i className="fal fa-plus"></i> Add Photo</span>
                </div>
            </div>
            
            <div className="footBtnWrap">
                <Button className="payNowBtn" variant="contained">Submit Request</Button>
            </div>
        </div>        
    </>
  )
}

export default RaiseIssue