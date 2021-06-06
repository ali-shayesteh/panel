import React from 'react'
import styled from 'styled-components'

interface buttonProps {
    title: string,
    styleType: string
}
const StyledButton = styled.button<{styleType:string}>`
    padding: 6px 12px;
    background-color: ${props => props.styleType ==='primary' ? '#000': 'blue'};
    color: #fff;
    border-radius: 4px;
    border: none;
    outline: none;
    display: inline-block;
`
const Button : React.FC<buttonProps> = ({title, styleType}) => {
    return (
        <StyledButton type="submit" styleType={styleType}>{title}</StyledButton>
    )
}

export default Button;