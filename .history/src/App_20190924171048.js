/*
 * @Author: ruzhan
 * @Date: 2019-09-19 13:42:13
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React from 'react';
import './App.css';
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom'

import Home from './pages/home'
import Admin from './admin';
import ErrInfo from './pages/errInfo';
import Test from './pages/test';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" render={() => 
            <Admin>
              <Switch>
              <Route path="/home"  component={Home} />
              <Route path="/errInfo"  component={ErrInfo} />
              <Route path="/test"  component={Test} />
              <Redirect to="/home"   component={Home}/>
              </Switch>
            </Admin>
          }/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
