/**
 * Created by Lijun on 2018/1/15.
 */

import React from 'react';
import PropTypes from "proptypes"
import {Button, Layout} from "antd"
const {Content} = Layout
class ArticleEditor extends React.Component {
    constructor(props){
        super(props);
        this.id = "addArticle"
        this.state = {
        };
    }
    componentDidMount(){
        this.initEditor()
    }
    componentWillUnmount() {
        // 组件卸载后，清除放入库的id
        UE.delEditor(this.id);//eslint-disable-line
    }
    initEditor() {
        const id = this.id;
        let initialFrameWidth = document.querySelector(".container").clientWidth;
        const ueEditor = UE.getEditor(this.id, {initialFrameWidth:780});//eslint-disable-line
        const self = this;
        ueEditor.ready((ueditor) => {
            if (!ueditor) {
                UE.delEditor(id);//eslint-disable-line
                self.initEditor();
            }
        })
    }
    saveArticle=()=>{
        const ueEditor = UE.getEditor(this.id)//eslint-disable-line
        console.info(ueEditor.getContent());
    }
    cancelArticle=()=>{
        this.context.router.history.goBack();
    }
    render(){
        return (
            <Layout className="container">
                <Content>
                    <div id={this.id} name="content" ></div>
                    <Button type="primary" onClick={this.saveArticle}>保存</Button>
                    <Button type="default" onClick={this.cancelArticle}>取消</Button>
                </Content>
            </Layout>

        )
    }
}

ArticleEditor.contextTypes={
    router: PropTypes.object.isRequired
}

export default ArticleEditor