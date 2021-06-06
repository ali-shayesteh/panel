import Table from '../../components/table/table';
import {useState, useEffect} from 'react';


const Index:React.FC = () => {
    const [products, setProducts] = useState<{id:number;title:string;price:number;}[] | undefined>();
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((result)=>setProducts(result))
    },[])
    return( 
        <Table data={products} />
    )
}

export default Index;