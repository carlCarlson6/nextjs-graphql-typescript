import { parseCookies } from './utils/cookieParser';
import React from 'react';
import PropTypes from 'prop-types';

export const withApollo = (App: any) => {
    class WithData extends React.Component {
        static displayName = `WithData(${App.displayName})`;
        static propTypes = {
            apolloState: PropTypes.object.isRequired
        };
        static async GetInitalProps(context: any) {
            const { Component, router, context: {request, response} } = context

            const apollo = initApollo({}, {getToken: ()=>parseCookies(request).rdscookie})
        }

    }

    return WithData
}