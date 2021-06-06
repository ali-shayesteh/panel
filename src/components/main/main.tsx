import styled from 'styled-components';
import Form from '../form/form';

const StyledMain = styled.main`
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
`

const inpt = [
    {
        label:'name',
        placeholder: 'your name',
        type: 'text'
    },
    {
        label:'email',
        placeholder: 'your email',
        type: 'email'
    },
    {
        label:'password',
        placeholder: 'your password',
        type: 'password'
    },
    {
        label:'comment',
        placeholder: 'your comment',
        type: 'textarea'
    },
]

const Main:React.FC = () => {
    const handleSubmit = () =>{
        alert('Submitted!!!');
    }
    return (
        <StyledMain>
            <Form onSubmit={handleSubmit} inputs={inpt}/>
        </StyledMain>
    )
}

export default Main;