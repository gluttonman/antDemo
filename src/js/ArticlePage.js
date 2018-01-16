

/**
 * Created by Lijun on 2018/1/9.
 */

import React, {Component} from "react"
import axios from "axios"
import {Layout, Table, Button, Form, Modal} from "antd"
import PropTypes from "proptypes"
import "../data/articleList"
const {pagination} = Table
const {Header, Content} = Layout
const FormItem = Form.Item


class ArticlePage extends Component{
    constructor(){
        super();
        this.state={
            data: []
        }
    }

    componentWillMount(){
        axios.get("/yx/article/getMyArticleList").then((res)=>{
            this.setState({data:res.data})
        })
    }

    skipToAddArticle=()=>{
        this.context.router.history.push("/yx/manage/editArticle")
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
        const columns =[
            {
                title:"序号",
                key: "id",
                dataIndex: "id",
                render:(text, record, index)=>{
                    return ++index;
                },
                ...textCenter
            },{
                title: "标题名称",
                dataIndex: "title",
                render: (text, record, index)=>{
                    return text.length>20?text.substring(0,20):text;
                },
                ...textCenter
            },{
                title: "文章类型",
                dataIndex: "catetory_name",
                ...textCenter
            },{
                title: "创建时间",
                dataIndex: "create_time",
                ...textCenter
            },{
                title: "操作",
                render: (text, record, index)=>{
                    return (
                        <div>
                            <Button>共享</Button>
                            <Button>编辑</Button>
                            <Button>删除</Button>
                        </div>
                    )
                },
                ...textCenter

            }
        ]

        return(
            <Layout className="container">
                <Header style={{backgroundColor: '#ffffff'}}>
                    <Form style={{marginTop:15}}>
                        <FormItem>
                            <Button type="primary" className="pull-right" onClick={this.skipToAddArticle}>添加</Button>
                        </FormItem>
                    </Form>
                </Header>
                <Content>
                     <Table columns={columns}  dataSource={this.state.data} pagination={pagination}></Table>
                </Content>
            </Layout>
        )
    }
}

ArticlePage.contextTypes={
    router: PropTypes.object.isRequired
}

export  default  ArticlePage