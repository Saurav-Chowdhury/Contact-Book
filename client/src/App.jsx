import {Routes,Route,Link} from 'react-router-dom';
import Add from './Add/Add';
import List from './List/List ';

function App() {
    return ( <>
        <div className="header">
            <div className="heading">
                <h1>Simple Contact Book</h1>
            </div>
            <div className="links">
                <div className="link-list">
                    <Link className='list' to='/'>List of Contacts</Link>
                    <Link className='list' to='/add'>Add Contact</Link>
                </div>
            </div>
        </div>
        <Routes>
                <Route exact path='/' element={<List/>} />
                <Route path='/add' element={<Add/>}/>
            </Routes>
    </> );
}

export default App;