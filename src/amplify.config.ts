import { Capacitor } from '@capacitor/core';
import { Amplify } from 'aws-amplify';

const isNativePlatform = Capacitor.isNativePlatform();

interface AuthConfig {
    userPoolId: string;
    userPoolClientId: string;
    oauthDomain: string;
}

const redirectUrl = isNativePlatform ? 'com.example.myapp:/' : window.location.origin;

export const configureAmplify = ({
                                     userPoolId,
                                     userPoolClientId,
                                     oauthDomain,
                                 }: AuthConfig) => {
    Amplify.configure({
        Auth: {
            Cognito: {
                userPoolId,
                userPoolClientId,
                loginWith: {
                    oauth: {
                        domain: oauthDomain as string,
                        responseType: 'code',
                        scopes: [
                            'profile',
                            'openid',
                            'email',
                            'aws.cognito.signin.user.admin',
                        ],
                        redirectSignIn: [redirectUrl],
                        redirectSignOut: [redirectUrl],
                    },
                },
            },
        },
    });
};