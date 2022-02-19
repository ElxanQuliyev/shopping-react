import {useState,useContext,createContext,useEffect} from 'react'

const BasketContext = createContext();



const BasketPrivader=({children})=>{
    const [items, setItems] = useState([]);
   
    const addToCart=(pro,findBasketItem)=>{
       if(!findBasketItem){
            return setItems(items=>[pro,...items]);   
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



