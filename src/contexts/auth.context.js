import React, { createContext, useState, useEffect } from "react"
import { AuthServices } from "../services/auth.services"
import { ClientService } from "../services/client.service"
import Cookies from 'universal-cookie';

export const AuthContext = createContext({
    isAuthenticated: false,
    isLoading: false,
    isReady: false,
    user: undefined,
    token: undefined,
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
    const cookies = new Cookies();

    // Load token from cookies
    useEffect(() => {
        setCheckingToken(true)
        const tokenCookie = cookies.get('token');
        const userCookie = cookies.get('user');
        console.log("tokenCookie :>> ", tokenCookie);
        console.log("userCookie :>> ", userCookie);
        if (tokenCookie != undefined) {
            setToken(tokenCookie)
        }
        if (userCookie != undefined) {
            setUser(userCookie)
        }
        if (tokenCookie != undefined && userCookie != undefined) {
            setIsAuthenticated(true)
            setIsReady(true)
        } 
        setCheckingToken(false)
    }, [])

    const login = (email, password) => {
        setIsLoading(true)
        setIsAuthenticated(false)
        
        AuthServices.login(email, password)
            .then((response) => {
                console.log(response);
                setToken({
                    accessToken: response.data.access_token,
                    refreshToken: response.data.refresh_token,
                    expires: response.data.expires,
                })
            })
            .catch((error) => {
                setIsLoading(false)
                console.log(error)
            }
        )
    }

    useEffect(() => {
        if (checkingToken) return
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
    }, [token])

    useEffect(() => {
        if (checkingToken) return
        console.log("userUid :>> ", userUid);
        if (userUid) {
            ClientService.fetchClientById(userUid, token.accessToken)
            .then((response) => {
                setUser(response.data)
                setIsAuthenticated(true)
                ClientService.fetchClientRolesById(response.data.role, token.accessToken)
                .then((response) => {
                    setUser({ ...response.data, role: response.data })

                    setIsLoading(false)
                    setIsReady(true)
                    
                    cookies.set('user', user, { path: '/', expires: new Date(Date.now() + 900000) });
                    cookies.set('token', token, { path: '/', expires: new Date(Date.now() + 900000) });
                })
                .catch((error) => {
                    setIsLoading(false)
                    console.log(error)
                })
            })
            .catch((error) => {
                setIsLoading(false)
                console.log(error)
            })
        }
    }, [userUid])

    const logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isReady, token, isLoading, isAuthenticated, user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider