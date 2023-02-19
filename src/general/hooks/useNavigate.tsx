import { useNavigate } from 'react-router-dom'
import {useEffect} from "react";

export const useNavigation = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/home')
    }, [])
}
