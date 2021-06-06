import Button from '../button/button';
import styled from 'styled-components';

const StyledTable = styled.table`
    border-collapse: collapse;
    tr{
        td{
            border: 1px solid #ccc;
            padding: 5px;
        }
    }
`

interface tableProps {
    data: {id:number;title:string;price:number;}[] | undefined
}

const Table:React.FC<tableProps> = ({data}) => {
    return(
        <StyledTable>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>price</th>
                    <th>operation</th>
                </tr>
            </thead>
            <tbody>
            {data?.map(tableRow =>
                (
                    <tr>
                        <td>{tableRow.id}</td>
                        <td>{tableRow.title}</td>
                        <td>{tableRow.price}</td>
                        <td>
                            <Button title="Edit" styleType="primary" />
                            <Button title="Delete" styleType="secondary" />

                        </td>
                    </tr>
                )
            )}
            </tbody>
        </StyledTable>
    )
}

export default Table;