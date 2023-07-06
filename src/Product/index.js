import React,{useState,useEffect} from "react";
const Products =() =>{
    const [products,setProducts] = useState([])
    //has a callback function and a dependancy array where you put variables for the changes
    useEffect(()=>{ //when page loads
        (async ()=>{;
        await getProducts();
        })();
    },[]);
    const getProducts =async() =>{
        try{
        const response=await fetch('https://dummyjson.com/products')
        const result= await response.json();
        setProducts(result.Products);
        setLoading(false);
    }catch (error){
        console.log(error.message);
    }
};
console.log({products});
if (loading) {
    
    
}
    return(
        <div>

        </div>
    )
}
export default Products