import React, {PureComponent} from 'react';

import Logo from '../../components/Logo';

import './Header.scss';

class Header extends PureComponent {
    render() {
        return (
            <header>
                <nav>
                    <Logo/>
                </nav>
            </header>
        );
    }
}

export default Header;
