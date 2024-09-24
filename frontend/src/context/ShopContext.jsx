import {createContext} from 'react'
import {product, products} from '../assets/assets'
export const ShopContext = createContext()

const ShopContextProvider = () => {

    const currency = '$';
    const delivery_fee = 10;
    const latest_collection = '';

    const value = {
            products, currency, delivery_fee

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default shopContextProvider;