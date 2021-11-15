import { NavLink, withRouter } from "react-router-dom";
import './nav.css'
const items = [
    {name: 'Home', to: '/', exact: true},
    { name: 'New Comment', to: '/new-comment' },
    ]

const Navigation = ({location}) => {
    return (
        
        <nav>
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.to}>
                            <NavLink to={item.to} activeClassName='activelink' exact={item.exact || false}>
                            {item.name}
                            </NavLink>
                    </li>
                )})}
               
            </ul>
        </nav>
    
       );
}
 
export default withRouter(Navigation);