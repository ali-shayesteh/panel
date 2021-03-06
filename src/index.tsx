import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/icons.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
//import Main from './components/main/main';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`

const Index = () => {
    return (
        <>
            <Header title="Admin Panel" name="Ali Shayesteh" />
            <Wrapper>
                <Router>
                    <Sidebar />
                    <Switch>
                        {routes.map(({containerPath, name, path}) =>
                            (
                                <Route exact path={path} key={name} >
                                    {
                                        (props) =>{
                                            let Container = require(`${containerPath}`).default
                                            return(
                                                <Container {...props} />
                                            )
                                        }
                                    
                                    }
                                </Route>
                            )
                        )}
                    </Switch>
                </Router>
            </Wrapper>
        </>
    );
}

ReactDOM.render(<Index/>, document.querySelector("#root"));