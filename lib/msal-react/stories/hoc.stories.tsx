import React from 'react';
import { MsalProvider, IWithMsalProps, withMsal } from '../src';

import { msalInstance } from './msalInstance';

export default {
    title: 'MSAL React/withMsal',
};

export const Example = () => {
    return (
        <MsalProvider instance={msalInstance}>
            <WithMsalExample />
        </MsalProvider>
    )
};


const WelcomeMessage: React.FunctionComponent<IWithMsalProps> = (props) => {
    const accounts = props.msalContext.state.accounts;
    
    if (accounts.length > 0) {
        return <span>Welcome! The <pre style={{display: 'inline'}}>withMsal()</pre> higher-order component can see you are logged in with {accounts.length} accounts.</span>;
    } else {
        return <span>Welcome! The <pre style={{display: 'inline'}}>withMsal()</pre> higher-order component has detected you are logged out!</span>;
    }
}

const WithMsalExample = withMsal(WelcomeMessage);