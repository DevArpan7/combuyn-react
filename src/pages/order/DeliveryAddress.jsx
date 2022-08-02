import React from 'react'
import OrderTopBar from './OrderTopBar'
import { Link } from 'react-router-dom'
import Radio from '@mui/material/Radio';


const DeliveryAddress = () => {

    const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
   
  return (
    <>
        <div className="forHeaderFix forBottomFix">
            <OrderTopBar />

            <div className='orderWrapper'>
                <Link to="/add-address"className="uploadPhoto">
                    <span><i className="fal fa-plus"></i> Add new Address</span>
                </Link>
                <label className='orderDetails_address'>
                    <div className='orderDetails_address_header'>
                        <div className='orderDetails_address_type'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#007CB2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#007CB2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Home</span>
                        </div>
                        <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                    </div>
                    <h6>Manik Mitra</h6>
                    <p>9876543210</p>
                    <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Kolkata -700016</p>

                    <div className="orderDetails_address_footer">
                        <Link to="/add-address">Edit</Link>
                        <Link to="/">Delete</Link>
                    </div>
                </label>

                <label className='orderDetails_address'>
                    <div className='orderDetails_address_header'>
                        <div className='orderDetails_address_type'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.667 5.83334H3.33366C2.41318 5.83334 1.66699 6.57953 1.66699 7.5V15.8333C1.66699 16.7538 2.41318 17.5 3.33366 17.5H16.667C17.5875 17.5 18.3337 16.7538 18.3337 15.8333V7.5C18.3337 6.57953 17.5875 5.83334 16.667 5.83334Z" stroke="#007CB2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.3337 17.5V4.16667C13.3337 3.72464 13.1581 3.30072 12.8455 2.98816C12.5329 2.67559 12.109 2.5 11.667 2.5H8.33366C7.89163 2.5 7.46771 2.67559 7.15515 2.98816C6.84259 3.30072 6.66699 3.72464 6.66699 4.16667V17.5" stroke="#007CB2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                            <span>Work</span>
                        </div>
                        <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                    </div>
                    <h6>Manik Mitra</h6>
                    <p>9876543210</p>
                    <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Kolkata -700016</p>

                    <div className="orderDetails_address_footer">
                        <Link to="/add-address">Edit</Link>
                        <Link to="/">Delete</Link>
                    </div>
                </label>

                <Link to="/add-address"className="uploadPhoto">
                    <span><i className="fal fa-plus"></i> Add Alternative Address</span>
                </Link>
            </div>
        </div>        
    </>
  )
}

export default DeliveryAddress