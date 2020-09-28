import * as React from "react";
import { IPublicClientApplication, AccountInfo } from "@azure/msal-browser";

type MsalState = {
    accounts: AccountInfo[];
};

export interface IMsalContext {
    instance: IPublicClientApplication;
    state: MsalState;
}

// Stubbed context implementation
const defaultMsalContext: IMsalContext = {
    instance: {
        // Msal methods
        acquireTokenPopup: () => {
            return Promise.reject();
        },
        acquireTokenRedirect: () => {
            return Promise.reject();
        },
        acquireTokenSilent: () => {
            return Promise.reject();
        },
        getAllAccounts: () => {
            return [];
        },
        getAccountByUsername: () => {
            return null;
        },
        getAccountByHomeId: () => {
            return null;
        },
        handleRedirectPromise: () => {
            return Promise.reject(null);
        },
        loginPopup: () => {
            return Promise.reject();
        },
        loginRedirect: () => {
            return Promise.reject();
        },
        logout: () => {
            return Promise.reject();
        },
        ssoSilent: () => {
            return Promise.reject();
        },
    },
    state: {
        accounts: [],
    },
};

export const MsalContext = React.createContext<IMsalContext>(
    defaultMsalContext
);
export const MsalConsumer = MsalContext.Consumer;
