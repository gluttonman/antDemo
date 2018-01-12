/**
 * Created by Lijun on 2018/1/3.
 */

import "../css/LoginForm.css"
import React from "react"
import axios from "axios"
import PropTypes from "proptypes"
import '../data/user'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(){
        super();
    }
    handleSubmit(e){
        e.preventDefault();
        let data = this.props.form.getFieldsValue()
        let history = this.context.router.history
        axios.post("/users",data).then(function(res){
            let resMsg = res.data.data;
            if(resMsg.name === "lily" && resMsg.password==="1"){
                history.push('/yx/manage');
            }else{
                alert("密码错误")
            }
        })
    }



    render() {
        const {getFieldDecorator} = this.props.form;
        return (
                <Form onSubmit={(e)=>this.handleSubmit(e)} className="login-form">
                    <FormItem>
                        {
                            getFieldDecorator(
                                'userName',{
                                    rules:[{required: true, message:'姓名不能为空！'}],
                                }
                            )(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )
                        }


                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator(
                                "password",{
                                    rules:[{required: true, message:"密码不能为空！"}]
                                }
                            )(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )
                        }


                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
        );
    }
}

NormalLoginForm.contextTypes = {
    router: PropTypes.object.isRequired
};
let WrapForm = Form.create()(NormalLoginForm)
export default WrapForm