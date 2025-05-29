import React from 'react'
// Fetch hook
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
// User Cards Component
import UserCards from '../../components/UserCards';

const Users = () => {
    const navigate = useNavigate();
    const { data, error, loading } = useFetch("/users");

    if (error) {
        navigate("*");
        console.error(error);
    }
    return (
        <UserCards data={data} loading={loading} />
    )
}

export default React.memo(Users);