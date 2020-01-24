import React, {PureComponent, Fragment} from 'react';
import { Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

class View extends PureComponent {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return (
            <Fragment>
                <Header/>

                <section className="main">
                    <Switch>
                        {this.props.children}
                    </Switch>
                </section>

                <Footer/>
            </Fragment>
        );
    }
}

export default View;
