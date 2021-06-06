import styled from 'styled-components';
import SidebarItem from './sidebaritem';
import Button from '../button/button';


const Aside = styled.aside`
    width: 20%;
`
const SidebarItems = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const items = [
    {
        title: 'Dashboard',
        link: '/',
        icon: 'gauge'
    },
    {
        title: 'Products',
        link: '/products',
        icon: 'box'
    },
    {
        title: 'Carts',
        link: '/carts',
        icon: 'basket'
    },
    {
        title: 'Users',
        link: '/users',
        icon: 'users'
    },
]
const Sidebar: React.FC = () => {
    return (
        <Aside>
            <SidebarItems>
                {items.map(item => {
                    return (
                        <SidebarItem title={item.title} link={item.link} icon={item.icon} />
                    )
                })}
            </SidebarItems>
            <Button title="logout" styleType="secondary" />
        </Aside>
    )
}

export default Sidebar;