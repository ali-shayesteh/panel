import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.span<{size:number}>`
    font-size: ${props => props.size}px;
`

interface iconProps {
    title: string,
    size: number
}

const Icon :React.FC<iconProps> = ({title, size}) => {
    return(
        <StyledIcon className={`icon-${title}`} size={size} />
    )
}

export default Icon;