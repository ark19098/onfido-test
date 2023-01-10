import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import {Alert,Typography} from '@mui/material';
import { IconChevronLeft, IconPassport } from '@onfido/castor-icons';
import { Form, Button, Spinner, Field, FieldLabel, Asterisk, Input, Validation, Select, Option, HelperText, Radio, 
    Checkbox, Fieldset, FieldsetLegend} from '@onfido/castor-react';
import { Badge } from 'antd';
import { LeftOutlined, RedoOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons';
import './EnterAadharForm.scss'
import { Link } from 'react-router-dom';
    
const EnterAadharForm = () => {

    const [firstName, setFirstName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        console.log(firstName)
    }

    const handleSubmit = () => {
        setLoading(true);
    }

    return (
        <>
            {/* <input class="ods-input" placeholder="11111111" type="text" style={{width: 300, height: 50, margin: "10px"}}></input> */}
            
            <Box display="flex" className='just-cont-center'>
                <Box marginTop="20px">
                    <Badge.Ribbon text='STEP 1/3' color='green'>
                    <Paper elevation={2} sx={{width: "400px", height: "734px"}}>
                        <Form onSubmit={handleSubmit}>
                            <Stack direction="row">
                                <Button kind="action" variant="tertiary">
                                    {/* <IconChevronLeft color="success-600" /> */}
                                    <LeftOutlined style={{fontSize:'35px'}}/>
                                </Button>  
                                {/* <Box sx={{backgroundColor: "#EBEDFF", padding: 1}}>
                                    <p className='bold300'>STEP 1/3</p>
                                </Box>   */}
                            </Stack>       
                            <Stack spacing={4} sx={{margin: "20px"}}>
                            
                            <p className="bold600">Verify with Digilocker</p>
                                <Field>
                                    <FieldLabel htmlFor="first-name" className="regular400">
                                    <span>
                                        Aadhar Number
                                        <Asterisk />
                                    </span>
                                    <Input
                                        autoComplete="given-name"
                                        id="first-name"
                                        onChange={handleFirstName}
                                        name="firstName"
                                        value={firstName}
                                        placeholder="1111-2222-3333"
                                        required
                                        style={{width: "360px", height: "50px"}}
                                    />
                                    </FieldLabel>
                                    <Validation
                                    if="valueMissing"
                                    state="error"
                                    >
                                    Please fill in this field
                                    </Validation>
                                </Field>
                                <div style={{width: "360px", height: "50px"}}>
                                    <Alert severity="info" sx={{backgroundColor:"#EBEDFF"}}>Please enter the Adhaar Number used during your registration with Digilocker.</Alert>
                                </div>
                                <Link to='proceed'>
                                    <Button kind="action" 
                                        style={{
                                                width: "360px", 
                                                height: "50px", 
                                                marginTop: "200px"
                                                }} 
                                    > 
                                        Continue {!loading && <RightOutlined className='btn-icon'/>} {loading && <SyncOutlined spin className='btn-icon'/>}
                                    </Button>
                                </Link>
                                
                            </Stack>
                            {/* <Paper elevation={3} sx={{width: 400, height: 150, marginTop: 24}}>
                                <Stack spacing={2} sx={{padding: "10px"}}>  
                                </Stack>   
                            </Paper> */}
                        </Form>
                    </Paper>
                    </Badge.Ribbon>
                </Box>
            </Box>
            
        </>
    );
}

export default EnterAadharForm;
