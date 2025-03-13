async function productosapi(){
    try{
        console.log("Hola mundo");
        
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;

    }catch(error) { console.error("error:", error)}
    
}
export {productosapi}