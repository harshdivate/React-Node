import './App.css';
import {Routes, Route} from "react-router-dom"
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route  path="/" element={<Layout/>}>
      <Route index element= {<IndexPage/>}/>

      <Route path="/login" element = {<Login/>}/>
      <Route path={'/register'} element = {<RegisterPage/>} 
      />
     </Route>
    </Routes>
  )
}

export default App
