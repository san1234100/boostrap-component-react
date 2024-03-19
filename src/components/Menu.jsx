import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <div className="text-white p-5">
            <Link to={'/'} className="menu-items block mb-3 font-medium">Home</Link>
            <h4 className="font-semibold text-lg ">Components</h4>
             <ul className="space-y-1 mt-3 font-medium">
                <li className="menu-items">
                <Link to={'/accordion'}>Accordion</Link>
                </li>
                <li className="menu-items">
                     <Link to={'/alerts'}>Alerts</Link>
                </li>
                <li className="menu-items">
                    <Link to={'/buttons'}>Buttons</Link>
                </li>
                <li className="menu-items">
                <Link to={'/cards'}>Cards</Link>
                </li>            
             </ul>
        </div>
     );
}
 
export default Menu;