import React, { createContext, useState, useEffect } from "react"
import { AuthServices } from "../services/auth.services"
import { ClientService } from "../services/client.service"
import Cookies from 'universal-cookie';
import { set } from "immutable";

export const AuthContext = createContext({
    isAuthenticated: false,
    isLoading: false,
    isReady: false,
    user: undefined,
    token: undefined,
    error: undefined,
    setError: (error) => {},
    login: (email, password) => {},
    logout: () => {},
})

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const [userUid, setUserUid] = useState(undefined)
    const [checkingToken, setCheckingToken] = useState(false)
    const [refreshingToken, setRefreshingToken] = useState(false)
    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const [error, setError] = useState(undefined)
    const cookies = new Cookies();

    // Load token from cookies
    useEffect(() => {
        setCheckingToken(true)
        console.log(document.cookie);
        const tokenCookie = JSON.parse(localStorage.getItem('token'));
        const userCookie = JSON.parse(localStorage.getItem('user'));
        console.log("tokenCookie :>> ", tokenCookie);
        console.log("userCookie :>> ", userCookie);

        if (tokenCookie && userCookie) {
            console.log("Saved token found");
            setIsAuthenticated(true)
            setUser(userCookie)
            setToken(tokenCookie)
        } else {
            console.log("No saved token found");
            setIsAuthenticated(false)
            setUser(undefined)
            setToken(undefined)
        }

        setCheckingToken(false)
        setIsReady(true)
    }, [])

    const login = (email, password) => {
        setIsLoading(true)
        setIsAuthenticated(false)
        
        AuthServices.login(email, password)
            .then((response) => {
                setToken({
                    accessToken: response.data.access_token,
                    refreshToken: response.data.refresh_token,
                    expires: response.data.expires,
                })
                localStorage.setItem('token', JSON.stringify({
                    accessToken: response.data.access_token,
                    refreshToken: response.data.refresh_token,
                    expires: response.data.expires,
                }))

                AuthServices.status(response.data.access_token)
                .then((resp) => {
                    setUserUid(resp.data.id)
                })
                .catch((error) => {
                    setIsLoading(false)
                })
            })
            .catch((error) => {
                setIsLoading(false)
            })
    }

    /*useEffect(() => {
        if (!checkingToken && !refreshingToken && !isLoggingOut) {
            console.log("token :>> ", token);
            if (token) {
                AuthServices.status(token.accessToken)
                .then((response) => {
                    setUserUid(response.data.id)
                })
                .catch((error) => {
                    setIsLoading(false)
                    console.log(error)
                })
            }
        }
    }, [token])*/

    useEffect(() => {
        if (!checkingToken && !refreshingToken && !isLoggingOut) {
            console.log("userUid :>> ", userUid);
            if (userUid) {
                ClientService.fetchClientById(userUid, token.accessToken)
                .then((response) => {
                    setIsAuthenticated(true)
                    console.log("response.data :>> ", response.data);

                    ClientService.fetchClientRolesById(response.data.role, token.accessToken)
                    .then((r) => {
                        setUser({ ...response.data, role: r.data })
                        localStorage.setItem('user', JSON.stringify({ ...response.data, role: r.data }))
                        setIsLoading(false)
                        setIsReady(true)
                    })
                    .catch((error) => {
                        setIsLoading(false)
                    })
                })
                .catch((error) => {
                    setIsLoading(false)
                })
            }
        }
    }, [userUid])

    /*useEffect(() => {
        if (error) {
            setIsLoading(true)
            setIsReady(false)
            setRefreshingToken(true)
            console.log("error :>> ", error);
            console.log("token :>> ", token);

            AuthServices.refreshToken(token.refreshToken)
            .then((response) => {
                setToken({
                    accessToken: response.data.access_token,
                    refreshToken: response.data.refresh_token,
                    expires: response.data.expires,
                })

                cookies.set('token', token, { path: '/', expires: new Date(Date.now() + 900000) });
                cookies.set('user', user, { path: '/', expires: new Date(Date.now() + 900000) });
                setError(undefined)
                setIsLoading(false)
                setIsReady(true)
                setRefreshingToken(false)
            })
            .catch((error) => {
                setIsLoading(false)
                console.log(error)
            })
        }
    }, [error])*/

    const logout = () => {
        setIsLoggingOut(true)
        setIsAuthenticated(false)
        setToken(undefined)
        setUser(undefined)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setIsLoggingOut(false)
    }

    return (
        <AuthContext.Provider value={{ isReady, token, error, isLoading, isAuthenticated, user, login, logout, setError }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider