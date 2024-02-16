import * as Auth from 'aws-amplify/auth';
import { configureAmplify } from './amplify.config.ts';
import { useEffect, useState } from 'react';

const login = () => {
    Auth.signInWithRedirect({
        provider: 'Google',
    });
};

const logout = () => {
    Auth.signOut();
};

configureAmplify({
    userPoolId: 'TO_BE_FILLED',
    userPoolClientId: 'TO_BE_FILLED',
    oauthDomain: 'TO_BE_FILLED',
});

export const App = () => {
    const [user, setUser] = useState<any>(undefined);

    useEffect(() => {
        (async () => {
            try {
                await Auth.fetchAuthSession();
                const ud = await Auth.fetchUserAttributes();
                setUser(ud);
            } catch (e) {
                setUser(undefined);
            }
        })();
    }, []);
    return (
        <div>
            <h1>My App</h1>
            {user ? (
                <>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                    <button onClick={() => logout()}>{'Log out'}</button>
                </>
            ) : (
                <button onClick={() => login()}>{'Log in'}</button>
            )}
        </div>
    );
}