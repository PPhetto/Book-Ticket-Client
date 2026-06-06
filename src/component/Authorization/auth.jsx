import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Auth() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }
        async function CheckUser() {
            const res = await fetch("http://localhost:3000/auth", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (!res.ok) {
                navigate("/");
            }
        }
        CheckUser()
    }, [])

  return (
    null
  )
}

export default Auth