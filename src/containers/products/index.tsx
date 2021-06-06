import Table from '../../components/table/table';
import {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
`
const tableKeys = ['id', 'title', 'price'];

const Index:React.FC = () => {
    
    const [products, setProducts] = useState<{id:number;title:string;price:number;}[] | undefined>();
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((result)=>setProducts(result))
    },[])
    return(
        <Wrapper>
            <h1>Products</h1>
            <Table keys={tableKeys} data={products} />
        </Wrapper>
    )
}

export default Index;