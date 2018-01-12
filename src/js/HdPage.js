

/**
 * Created by Lijun on 2018/1/9.
 */
import "../css/bootstrap.css"
import React, {Component} from "react"
import {Table,Layout, Form, Input, Select, Button,Modal} from "antd"
import axios from "axios"
import  "../data/hdPageList"
import StageAndSubject from "./component/StageAndSubject"
const {Content, Header} = Layout
const Option = Select.Option
const FormItem = Form.Item;
const btnWarning= {
    backgroundColor: '#ff931f',
    borderColor: '#ff931f',
    color: '#ffffff'
}

const SaveHd = Form.create()((props)=>{
    const {visible,form, onCancel, onSave, initForm} = props;
    const {getFieldDecorator} = form;
    form.setFieldsInitialValue(initForm)
    return (
        <Modal visible={visible} onCancel={onCancel} onOk={onSave}>
            <Form layout="vertical">
                <FormItem label="活动名称">
                    {getFieldDecorator("hd_name",{
                        rules:[{ required: true, message: 'Please input the title of collection!' }]
                    })(
                        <Input placeholder="请输入活动名称..."/>
                    )}

                </FormItem>
                <FormItem label="开始时间">
                    {getFieldDecorator("start_time")(
                        <Input placeholder="请输入开始时间..."/>
                    )}

                </FormItem>
                <FormItem label="结束时间">
                    {getFieldDecorator("end_time")(
                        <Input placeholder="请输入结束时间..."/>
                    )}

                </FormItem>
            </Form>
        </Modal>
    )

})


class HdPage extends Component{
    constructor(){
        super();
        this.state={
            visible: false,
            data:[]
        }
    }

    componentWillMount(){
        let _self = this;
        axios.get("/yx/manage/getHdList").then(function(res){
            _self.setState({data: res.data})
        })
    }

    showSaveModel = (id)=>{
        let initForm = null;
        if(id !== undefined){
            initForm = this.state.data.filter(item => item.id ===id)
        }
        this.setState({visible: true, initForm: initForm[0]})
    }

    onCancel = ()=>{
        this.setState({visible: false})
    }

    saveRefForm = (form)=>{
        this.form = form;
    }
    saveHd = ()=>{
        let values = this.form.getFieldsValue()
        console.info(values)
        this.setState({visible: false})
    }
    deleteHd = (record)=>{
        Modal.confirm({
            content:"这个活动删除或将无法还原！",
            title: "确定删除这个活动么？",
            onOk: function(){
                console.info(record)
            }
        })
    }
    render(){
        const textCenter = {
            onCell: ()=>({
                    className:"text-center"
                }
            ),
            onHeaderCell:()=>({
                    style:{"textAlign":"center"}
                }
            )
        }
        const columns = [
            {
                title:"序号",
                key:"id",
                render: function(text, record, index){
                    return ++index;
                },
                ...textCenter
            },
            {
                title:"活动名称",
                dataIndex:"hd_name",
                render: function(text){
                    return text.length>20?text.substring(0,20):text;
                },
                ...textCenter
            },
            {
                title:"活动类型",
                dataIndex:"lx_name",
                ...textCenter
            },
            {
                title:"操作",
                render: (text, record, index)=>{
                    const isMy = record.isMy;
                    const name = record.name;
                    return (
                        <div>
                            <Button className='btn btn-primary btn-sm' onClick={this.showSaveModel.bind(this, record.id)}>编辑</Button>
                            <Button onClick={this.deleteHd.bind(this,record)} className='btn btn-danger btn-sm' style={{display:isMy?'inline':'none',marginLeft:5,marginRight:5}}>删除</Button>
                            <Button>分享</Button>
                        </div>
                    )
                },
                ...textCenter
            }
        ]

        const pagination = {
            total: this.state.data.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current);
            }
        };

        return(
            <Layout>
                <Content className="container">
                    <Form layout="inline">
                        <Form.Item label="活动名称">
                            <Input name="名称" placeholder="请输入活动名称..."/>
                        </Form.Item>
                        <StageAndSubject label="学段学科"/>
                        <Form.Item>
                            <Button type="primary" htmlType="button">搜索</Button>
                        </Form.Item>
                        <Form.Item className="pull-right">
                            <Button  htmlType="button" style={{...btnWarning}} onClick={this.showSaveModel}>添加</Button>
                        </Form.Item>
                    </Form>
                    <Table className="table" columns={columns} dataSource={this.state.data} pagination={pagination}/>
                </Content>
                <SaveHd ref = {this.saveRefForm} initForm = {this.state.initForm} visible={this.state.visible} onCancel={this.onCancel} onSave={this.saveHd}/>
            </Layout>

        )
    }
}



export  default  HdPage