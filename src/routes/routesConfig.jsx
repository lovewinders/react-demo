/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-zhangb
 *Email: lovewinders@163.com
 *Date: 2017-05-06 12:50
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, browserHistory, hashHistory } from 'react-router-dom';
/*components import department*/
import {Header, Footer, HomeIndex, GoodsDesc} from '../containers/Root.jsx';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
class Roots extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {children} = this.props;
        return (
            <div>
                <Header/>
                {children}
                <Footer/>
            </div>
        )
    }
}
//配置整个页面的路由结构
const RouterConfig = (
    <HashRouter history={history}>
        <Roots>
            <Route exact path="/" component={HomeIndex}/>
            <Route path="/index" component={HomeIndex}/>
            <Route path="/goodsDesc" component={GoodsDesc}/>{/*商品描述*/}
        </Roots>
    </HashRouter>
);

render(
    RouterConfig,
    document.getElementById('example')
);