import Iframe from 'react-iframe';
import React from 'react';
import { Stack } from '@mui/system';

const MyFrame = () => {
    console.log("https://onfido.com/redirect?uyiu".split('?')[0]);
    return (
            <div style={{marginTop: 35}}>
                <Stack direction="row" className="just-cont-center">
                    <Iframe url="https://www.google.com/search?igu=1"
                            width="400px"
                            height="650px"
                            id=""
                            className=""
                            display="block"
                            position="relative"
                    />
                </Stack>
            </div>
    );
}

export default MyFrame;
