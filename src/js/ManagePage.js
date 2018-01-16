/**
 * Created by Lijun on 2018/1/6.
 */
import React,{Component} from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import axios from "axios"
import {Route, Link} from "react-router-dom"
import HdPage from "./HdPage"
import TopicPage from "./TopicPage"
import ArticlePage from "./ArticlePage"
import ArticleEdit from "./ArticleEdit"
import RoleMenu from "./RoleMenu"
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class ManagePage extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: false,
            data:{},
            children:import("./HdPage")
        };
    }

    componentWillMount(){
        /*axios.get("/yx/menus").then((res)=>{
            this.setState({data: res.data})
        })*/
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }


    render() {
        const {children} = this.props;
        return (
            <Layout>
                <Header></Header>
                <Layout style={{ minHeight: '100vh'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>教学研究</span></span>}
                            >
                                <Menu.Item key="3">
                                    <Link to="/yx/manage/hdPage">我的活动</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/yx/manage/articlePage">我的文章</Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/yx/manage/topicPage">我的专题</Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/yx/manage/roleMenu">角色管理</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>我的小组</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Route path="/yx/manage/hdPage" component={HdPage}/>
                        <Route path="/yx/manage/articlePage" component={ArticlePage}/>
                        <Route path="/yx/manage/editArticle" component={ArticleEdit}/>
                        <Route path="/yx/manage/topicPage" component={TopicPage}/>
                        <Route path="/yx/manage/roleMenu" component={RoleMenu}/>
                    </Layout>
                </Layout>
            </Layout>

        );
    }
}



export default ManagePage