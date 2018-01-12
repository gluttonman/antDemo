/**
 * Created by Lijun on 2018/1/12.
 */


import React,{Component} from "react"
import { Tree,Layout } from 'antd';
import axios from "axios"
import PropTypes from "proptypes"
import {Route} from "react-router-dom"
import RolePersons from "./RolePerson"
import "../data/roleMenu"
const {Sider, Content} = Layout
const TreeNode = Tree.TreeNode;

class RoleMenu extends Component {
    constructor(){
        super();
        this.state={
            menus:[]
        }

    }
    onSelect = (selectedKeys, info) => {
        this.history = this.context.router.history;
        let child = this.getChild(this.state.menus, selectedKeys[0])
        console.info(child)
        this.history.replace("/yx/manage/roleMenu/" + child.menuId)
    }

    getChild = (data, key)=>{
        let keys = key.split("-")
        if(keys.length>1){
            let currentKey = keys.shift();
            let child = data.find(item=>item.menuId==currentKey).children;
            return this.getChild(child, keys.length===1?keys[0]:keys.join("-"))
        }
        return data.find(item=>item.menuId==key)
    }

    componentWillMount(){
        axios.get("/yx/roleMenus").then((res)=>{
            this.setState({menus: res.data})
        })
    }

    generateTreeNode=(data, parentKey="")=>{
        return data.map((item)=>{
            return item.children===undefined?
            <TreeNode title={item.nodeName} key={parentKey+item.menuId}/>:
                <TreeNode title={item.nodeName} key={parentKey+item.menuId}>{this.generateTreeNode(item.children, parentKey+item.menuId+"-")}</TreeNode>
        })
    }

    render() {
        const menus = this.generateTreeNode(this.state.menus)
        return (
            <Layout>
                <Sider style={{backgroundColor:"#ffffff"}}>
                    <Tree
                        showLine
                        defaultExpandedKeys={['0-0-0']}
                        onSelect={this.onSelect}
                    >
                        {menus}
                    </Tree>
                </Sider>
                <Content>
                    <div>
                        <Route path="/yx/manage/roleMenu/:roleId" component={RolePersons}/>
                    </div>
                </Content>
            </Layout>
        )
    }
}

RoleMenu.contextTypes={
    router : PropTypes.object.isRequired
}
export default RoleMenu