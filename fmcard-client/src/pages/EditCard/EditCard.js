import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardGenerator from '../CardGenerator/CardGenerator';
const EditCard = () => {
    const { id } = useParams();
    const [card, setCard] = useState({});
    useEffect(() => {
        const fetchCard = (id) => {
            fetch(`https://renderz-app.onrender.com/card-generator/${id}/edit`)
                .then(res => res.json())
                .then(c => {

                    setCard({ ...c })
                }
                )
                .catch(err => {
                    throw new Error(err)
                })
        }
        fetchCard(id)
    }, []);
    return (
        <>
            <CardGenerator />
        </>
    )
}

export default EditCard