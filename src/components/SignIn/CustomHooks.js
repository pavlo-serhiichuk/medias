import {useState} from "react";

export const useSighinForm = (callback) => {
    let [inputs, setInputs] = useState({})

    let handleSighInSubmit = event => {
        event && event.preventDefault()
        callback()
    }

    let handleInputChange = event => {
        event.persist()
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
    }

    return { inputs, handleInputChange, handleSighInSubmit }

}