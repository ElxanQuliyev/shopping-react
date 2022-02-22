import {useState,useContext,createContext,useEffect} from 'react'

const BasketContext = createContext();
const defaultBasket=JSON.parse(localStorage.getItem("basket")) || [];


const BasketPrivader=({children})=>{
    const [items, setItems] = useState(defaultBasket);
   
    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(items))
    },[items])
    
    const addToCart=(data,findBasketItem)=>{
       if(!findBasketItem){
            return setItems(items=>[data,...items]);   
       }
       const filtered=items.filter(item=>item.id!==findBasketItem.id);
       setItems(filtered)   
    }
    
    const values= {
        items,setItems,addToCart
    }

    return (
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}

const useBasket=()=>useContext(BasketContext)

export {BasketPrivader,useBasket}



