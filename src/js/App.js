import React, {Component} from 'react';
import "../css/App.css";

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import LoginForm from "./Form";
const { Content } = Layout


class App extends Component {
  render() {
    return (
            <div className="ant-layout-content-back">
                <Layout className="form-center login-vertical-center">
                    <Content>
                        <LoginForm></LoginForm>
                    </Content>
                </Layout>
            </div>

        );
  }
}

export default App;
