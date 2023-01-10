import React from 'react';
import { Button, Result } from 'antd';

const ResultAntd = () => (
  <Result
    status="success"
    title="Successfully Verified By Digilocker!"
    subTitle="Thanks for choosing Onfido. Press continue to redirect."
    extra={[
      <Button type="primary" key="console" style={{backgroundColor: '#3640F5'}}>
        Continue
      </Button>,
      <Button disabled key="buy">Try Again</Button>,
    ]}
  />
);

export default ResultAntd;