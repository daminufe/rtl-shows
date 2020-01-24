import React, {PureComponent} from "react";

const makeCancelable = (promise) => {
    let hasCanceled = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCanceled ? reject({isCanceled: true}) : resolve(val),
            error => hasCanceled ? reject({isCanceled: true}) : reject(error),
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled = true;
        },
    };
};

export default function asyncComponent(importComponent) {
    class AsyncComponent extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                component: null,
            };
        }

        async componentDidMount() {
            this.importPromise = makeCancelable(importComponent());

            try {
                const {default: component} = await this.importPromise.promise;

                this.setState({component});
            } catch (e) {
            }
        }

        componentWillUnmount() {
            this.importPromise.cancel();
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}
