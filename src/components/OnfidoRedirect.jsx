import axios from 'axios';
import React,{useState, useEffect} from 'react'
import ResultAntd from './ResultAntd';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import {Alert} from '@mui/material';
import { IconChevronLeft, IconPassport } from '@onfido/castor-icons';
import { Form, Button, Spinner, Field, FieldLabel, Asterisk, Input, Validation, Select, Option, HelperText, Radio, 
    Checkbox, Fieldset, FieldsetLegend} from '@onfido/castor-react';
import { Badge, Card } from 'antd';
import { LeftOutlined, RedoOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons';

export default function OnfidoRedirect() {
  const [userDetails, setUserDeails] = useState({});
  useEffect(() => {
    // console.log(window.location.href);
    const currentURL = window.location.href;

    fetch('http://localhost:5000/getAadhaarcardNumber', {
      method: 'POST',
      body: JSON.stringify({
        'url': currentURL
      }),
      headers: {
        'Content-Type' : 'application/json',
        'Content-Length' : '<calculated when request is sent>' 
      },
    })
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setUserDeails(json);
  });

    
  }, []);
  return (
    <>
        
        {/* <h3>{userDetails.aadharcardNumber}</h3>
        <h4>{userDetails.name}</h4>
        <h5>{userDetails.DOB}</h5> */}

        <Box display="flex" className='just-cont-center'>
                <Box marginTop="20px">
                    {/* <Badge.Ribbon text='STEP 2/3' color='green'> */}
                    <Paper elevation={2} sx={{width: "400px", height: "734px"}}>
                        <Form>
                            <Stack style={{alignItems: "center"}}>
                                  
                                <ResultAntd/>  
                                <Card
                                  title="Your Details"
                                  // extra={<a href="#">More</a>}
                                  style={{
                                    width: 300,
                                  }}
                                >
                                  <p>{userDetails.aadharcardNumber}</p>
                                  <p>{userDetails.name}</p>
                                  <p>{userDetails.DOB}</p>
                                </Card>        
                            </Stack>       
                                   
                        </Form>
                    </Paper>
                    {/* </Badge.Ribbon> */}
                </Box>
            </Box>

    </>
  )
}
