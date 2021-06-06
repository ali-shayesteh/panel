import Button from '../button/button';
import styled from 'styled-components';

const StyledTable = styled.table`
    border-collapse: collapse;
    tr{
        td, th{
            border: 1px solid #ccc;
            padding: 5px;
        }
    }
`

interface tableProps {
    data:any[] | undefined
    keys:string[]
}

const Table:React.FC<tableProps> = ({data, keys}) => {
    return(
        <StyledTable>
            <thead>
                <tr>
                    {
                        keys.map(key=>
                            (
                                <th>{key}</th>
                            )
                        )
                    }
                    <th>operation</th>
                </tr>
            </thead>
            <tbody>
            {data?.map(row =>
                {
                    //let rowArray = Object.values(row);
                    return(
                        <tr>
                            {
                                keys.map(key=>
                                    (<td>{row[key]}</td>)
                                )
                            }
                            <td>
                                <Button title="Edit" styleType="primary" />
                                <Button title="Delete" styleType="secondary" />
                            </td>
                        </tr>
                    )
                }
            )}
            </tbody>
        </StyledTable>
    )
}

export default Table;