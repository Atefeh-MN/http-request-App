import './App.css';
import HttpApp from './components/HttpApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';


const App = () => {
  return (<div>
    <ToastContainer/>
    <HttpApp/>
  </div> );
}
 
export default App;