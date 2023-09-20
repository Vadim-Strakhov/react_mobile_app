import './Menu.scss';
import { Block } from '../Block/Block';
import { useState } from "react";
import { MenuItem } from './MenuItem/MenuItem';

const menuItemsIcon = [
    'Group-1',
    'Group-3',
    'Group-4',
    'Group-5'
]

export const Menu = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const setActive = (idx) => () => setActiveIdx(idx);

    return (
        (
        <Block className="Menu" big>
            {menuItemsIcon.map((item, idx) => (
                <MenuItem 
                    isActive={idx === activeIdx} 
					onClick={setActive(idx)}
					icon={item}
					/>
                ))}
        </Block>
    	)
    )
}

