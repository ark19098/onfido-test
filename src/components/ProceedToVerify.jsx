import React, {useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import {Alert} from '@mui/material';
import { IconChevronLeft, IconPassport } from '@onfido/castor-icons';
import { Form, Button, Spinner, Field, FieldLabel, Asterisk, Input, Validation, Select, Option, HelperText, Radio, 
    Checkbox, Fieldset, FieldsetLegend} from '@onfido/castor-react';
import { Badge, Image } from 'antd';
import { LeftOutlined, RedoOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons';
import digiLockerLogo from '../images/digilocker.png';

const ProceedToVerify = () => {
    const [loading, setLoading] = useState(false);

    const handleProceed = () => {
        setLoading(true);
        async function myFunc() {
        try {
            const response = await axios.get('http://localhost:5000/getDigilockerLoginURL', {
            });
            console.log(response.data);
            window.location.replace(response.data);
        } catch (error) {
            console.log(error);
        }
        }
        myFunc();
    }
  return (
    <div>
        <Box display="flex" className='just-cont-center'>
                <Box marginTop="20px">
                    <Badge.Ribbon text='STEP 2/3' color='green'>
                    <Paper elevation={2} sx={{width: "400px", height: "734px"}}>
                        <Form onSubmit={handleProceed}>
                            <Stack direction="row">
                                <Button kind="action" variant="tertiary">
                                    <LeftOutlined style={{fontSize:'35px'}}/>
                                </Button>         
                            </Stack>       
                            <Stack spacing={4} sx={{margin: "20px", alignItems: "center"}}>
                                <img
                                    src={digiLockerLogo}
                                    preview='false'
                                    style={{width: '300px', height: '100px'}}
                                >
                                </img>
                                <div style={{width: "360px", height: "50px", marginTop: "100px"}}>
                                    <Alert severity="info" sx={{backgroundColor:"#EBEDFF"}}>Please click on the Above Button to verify using Digilocker.</Alert>
                                </div>
                                <Button kind="action" 
                                        style={{
                                                width: "360px", 
                                                height: "50px", 
                                                marginTop: "200px"
                                                }} 
                                    > 
                                        Proceed to Verify {!loading && <RightOutlined className='btn-icon'/>} {loading && <SyncOutlined spin className='btn-icon'/>}
                                </Button>
                                
                                
                            </Stack>
                        </Form>
                    </Paper>
                    </Badge.Ribbon>
                </Box>
            </Box>
    </div>
  )
}

export default ProceedToVerify;
