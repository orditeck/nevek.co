import React from "react";
import { useStateValue } from '../state';

export const Menu = () => {
    const [state, dispatch] = useStateValue();

    const setCurrent = (id) => () => {
        dispatch({
            type: 'changeMainNavItem',
            newMainNavItem: id
        })

        const targetEl = document.getElementById(id)
        const menu = document.querySelector('.main-nav')

        if (targetEl) {
            const yCoordinate = targetEl.getBoundingClientRect().top + window.pageYOffset;
            const yOffset = -10;
            const yOffsetWithMenu = -(menu.clientHeight) + yOffset;
            window.scrollTo({
                top: yCoordinate + yOffsetWithMenu,
                behavior: 'smooth'
            });
        }
    }

    return <nav className="main-nav stickybits">
        <div className="container">
            <ul>
                <li><a onClick={setCurrent('accompagnement')}>Accompagnement</a></li>
                <li><a onClick={setCurrent('consultation')}>Consultation</a></li>
                <li><a onClick={setCurrent('developpement')}>Développement Web</a></li>
                <li><a onClick={setCurrent('engagement')}>Mon engagement</a></li>
                <li><a onClick={setCurrent('faq')}>F.A.Q.</a></li>
                <li><a onClick={setCurrent('site-footer')}>Contact</a></li>
            </ul>
        </div>
    </nav>
}
