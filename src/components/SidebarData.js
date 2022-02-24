import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
    title:'Perfil',
    path:"/",
    icon:<AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
    title:'Produtos',
    path:"/products",
    icon:<IoIcons.IoIosPaper />,
    cName: 'nav-text'
    },
    {
    title:'Reports',
    path:"/reports",
    icon:<FaIcons.FaCartPlus />,
    cName:'nav-text'
    }

]

export default SidebarData;