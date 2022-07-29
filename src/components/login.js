import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const Loginn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (



    <Form style={{margin:"5rem",marginTop:"2.5rem",padding:"1rem", width:"65rem",height:"20rem",borderRadius:"2.5rem"}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div id="header" style={{width:"100%"}}></div>
        <div id="container"className='container' style={{margin:"auto"}}>
            <div id="first" style={{float:"left",background:"rgb(238,238,238)",width:"25rem",borderRadius:"2.5rem" ,height:"25rem"}}>
            <Form.Item style={{margin:'1.5rem',width:"20rem"}}
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input style={{marginBottom:"0.75rem",marginTop:"0.5rem",width:"20rem",height:"2.5rem",borderRadius:"2.5rem"}}/>
      </Form.Item>
      <Form.Item style={{margin:'1.5rem',width:"20rem"}}
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please Enter your Password!',
          },
        ]}
      >
        <Input style={{marginBottom:"0.75rem",marginTop:"0.5rem",width:"20rem",height:"2.5rem",borderRadius:"2.50rem"}}/>
      </Form.Item>
  
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox style={{marginLeft:"1.5rem",marginTop:"1.25rem"}}>Remember Password</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type='primary' style={{ background: "rgba(56,210,174,255)", marginLeft:'1.5rem',color:"white",fontSize:"1rem",textAlign:"center",height:"2rem",width:"20rem",marginTop:"1.25rem"}} htmlType="submit">
          Login
        </Button>
      </Form.Item> 
      </div>
              <div id="second" style={{marginLeft:"10rem",marginTop:"3.5rem",width:"25rem",float:"left",height:"15rem"}}>
                  <img src="https://s25.q4cdn.com/982695397/files/images/your-needs/IR_websites.gif" style={{height:"15rem",width:"25.00rem"}}></img>
              </div>
            </div> 
    </Form>
  );
};

export default Loginn;