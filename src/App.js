import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import { NavBar } from "./components/Navbar";
import {useEffect} from 'react';
import { calculateTotals,getCartItems } from "./features/cart/cartSlice";
import Modal from './components/Modal'
// import modalReducer from './features/modal/modalSlice'
// import {closeModal,openModal} from './features/modal/modalSlice' 


function App() {
  const {cartItems,isLoading}=useSelector(store=>store.cart)
  const {isOpen}=useSelector(store=>store.modal)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  if(isLoading){
    return (
    <div className='loading'>
      <h1>Loading.......</h1>
    </div>
    )
  }

  return <main>
    {isOpen && <Modal/>}
    <NavBar/>
    <CartContainer/>
  </main>;
}
export default App;
