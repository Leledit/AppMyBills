import "../firebase/config.js"; 

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";
import {useNavigation} from '@react-navigation/native';
import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(null);

    //configuraçoes de rota
    const navigate = useNavigation();

    //cleanup
    //deal with memory leak
    const [cancelled,setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    //codigo responavel por registrar um novo usuario
    const createUser = async (data) =>{
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            //iniciando o cadastro pelo firebase
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.senha
            )
            //atualizando as informaçoes do usuario
            await updateProfile(user,{
                displayName:data.nome
            });
            navigate.navigate('drawer');
            return user;

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail ja cadastrado.";
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
            }

            setError(systemErrorMessage);
        }
        setLoading(false); 
    };

    //logout - sign out
    const logout = () =>{
        navigate.navigate('credenciais');
        checkIfIsCancelled();
        signOut(auth);
    }

    //login sign in
    const login = async(data) =>{
        checkIfIsCancelled();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, data.email, data.senha);
            setLoading(false);
            navigate.navigate('drawer');
        } catch (error) {
            let systemErrorMessage;

            if(error.message.includes("user-not-found")){
                systemErrorMessage = "Usuario nao encontrado."
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha nao encontrada."
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }
            setError(systemErrorMessage);
            setLoading(false);
        }
    }

    useEffect(() =>{
        return () => setCancelled(true);
    },[]);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}