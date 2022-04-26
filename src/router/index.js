import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from '../view/login/Login'
import Register from '../view/login/Register'
import NotUse from '../view/not-use/NotUse'
import Counter from '../view/counter'
import { store } from "../store";
import { Provider } from 'react-redux'
import Home from '../view/home/Home'
import UserList from '../view/user/User.List'
import UserDetails from '../view/user/User.Details'
import Square from '../view/square'
import Layouts from '../view/Layouts';
import UnLogin from "../view/not-use/UnLogin";
import Soduku from "../game/Soduku/index.tsx"

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/soduku" element={<Soduku />} />
        <Route path='/' element={<Layouts />} >
          <Route path="" exact element={<Home />} />
          <Route path="users" exact element={<UserList />} />
          <Route path="user/:id" exact element={<UserDetails />} />
          <Route path="square" element={<Square />} />
          <Route path="toLogin" element={<UnLogin />} />
        </Route>
        <Route element={<NotUse />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
export default App