import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout'
import { Switch, Route } from 'react-router';
import routes from './routes';



const App = () => {
  return (<div>
    <ToastContainer/>
    <Layout >
     <Switch>
        {routes.map((route) => (<Route {...route} />))}
      </Switch>
    </Layout>
    
  </div> );
}
 
export default App;