import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/icon';

interface itemProps {
    title: string,
    link: string,
    icon: string
}

const Item = styled.li`
    margin-bottom: 20px;
    a {
        text-decoration: none;
        color: #000;
    }
`

const SidebarItem :React.FC<itemProps> = ({title, link, icon}) => {
    return (
        <Item>
            <Icon title={icon} size={12} /><a href={link}>{title}</a>
        </Item>
    )
}

export default SidebarItem;