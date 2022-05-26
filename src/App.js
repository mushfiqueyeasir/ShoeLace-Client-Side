import { Route, Routes } from 'react-router-dom';
import Banner from './components/Page/Home/Banner/Banner';

import InventoryBody from './components/Page/Inventory/InventoryBody/InventoryBody';
import Join from './components/Page/Join/Join';
import Header from './components/Shared/Header/Header';
import UserAuth from './components/Auth/UserAuth/UserAuth'
import Footer from './components/Shared/Footer/Footer';
import AddItem from './components/Page/AddItem/AddItem';
import MyItems from './components/Page/MyItems/MyItems';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import ManageInventory from './components/Page/ManageInventory/ManageInventory';
import InventoryView from './components/Page/Inventory/InventoryView/InventoryView';
import { useState } from 'react';
import Error from './components/Shared/Error/Error';
import Blog from './components/Blog/Blog';
import AboutArticle from './components/Page/Home/AboutArticle/AboutArticle';
import PromoArticle from './components/Page/Home/PromoArticle/PromoArticle';

function App() {
  const [toggle, setToggle] = useState(false);
  const navClick = (event) => {
    if (!toggle) {
      document.getElementById('carouselExampleCaptions').classList.remove('top');
      setToggle(true)
    } else {
      document.getElementById('carouselExampleCaptions').classList.add('top');
      setToggle(false)
    }

  }
  return (
    <div>
      <Header navClick={navClick} />
      <Routes>
        <Route path='/' element={<><Banner /> <AboutArticle /> <InventoryBody /><PromoArticle /> <Footer /></>}></Route>
        <Route path='/home' element={<><Banner />  <AboutArticle /><InventoryBody /> <PromoArticle /><Footer /></>}></Route>
        <Route path='/inventory' element={<><InventoryBody></InventoryBody></>}></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryView></InventoryView>
          </RequireAuth>
        }></Route>

        <Route path='/blog' element={<Blog />}></Route>

        <Route path='/manageItems' element={
          <RequireAuth>
            <> <ManageInventory /> </>

          </RequireAuth>
        }></Route>

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path='/myItem' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/join' element={
          <UserAuth>
            <Join></Join>
          </UserAuth>
        }></Route>
        <Route path='*' element={<Error />}></Route>

      </Routes>




    </div>
  );
}

export default App;
