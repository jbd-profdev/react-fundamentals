import {
    Route,
    Link,
    Routes
} from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import ClassComponentDemo from '../concepts/ClassComponents/ClassComponentDemo';
import JSX from '../concepts/JSX/JSX';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/classcomponent'>Class Component</Link></li>
                    <li><Link to='/jsx'>JSX</Link></li>
                </ul>
            </div>
            <div className='sidebar-route'>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/resources' element={<Resources/>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/functionalcomponent' element={<FunctionalComponentDemo/>}/>
                    <Route exact path='/classcomponent' element={<ClassComponentDemo/>}/>
                    <Route exact path='/jsx' element={<JSX/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Sidebar;