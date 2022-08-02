import React from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditProfile = () => {
  return (
    <>
        <div className="forHeaderFix">
            <div className="mainTopBar">
                <div className="mainTopBar_left">
                    <Link className='topBackBtn' to="/profile">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    Edit Profile
                </div>
                {/* <div className="mainTopBar_right">
                    <ul>
                        <li>
                            <Link to="/edit-profile">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                            </Link>
                        </li>
                    </ul>
                </div> */}                
            </div>
            <div className="editProfile">
                <form className="formWraper">
                    <TextField 
                        sx={{ width: "100%", maxWidth: '100%' }}
                        className="formField"
                        id="fullName"
                        label="Full Name"
                        placeholder='Enter Your Name' 
                        variant="standard" 
                    />
                    <TextField 
                        sx={{ width: "100%", maxWidth: '100%' }}
                        className="formField"
                        id="phoneNumber"
                        label="Phone number "
                        placeholder='Enter Your Name' 
                        variant="standard" 
                    />
                    <TextField 
                        sx={{ width: "100%", maxWidth: '100%' }}
                        className="formField"
                        id="fullName"
                        label="Email ID"
                        placeholder='Enter Your Name' 
                        variant="standard" 
                    />
                    <div className="footBtnWrap">
                        <Button className="payNowBtn" variant="contained">UPDATE</Button>
                    </div>
                </form>
            </div>

            
        </div>
    </>
  )
}

export default EditProfile