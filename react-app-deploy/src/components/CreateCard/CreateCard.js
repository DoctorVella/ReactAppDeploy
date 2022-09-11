import React, { useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Swal from "sweetalert2";
import Card from '../Card/Card';
import './CreateCard.css';

const CreateCard = ({ setDefaultId }) => {
    const { axiosInstance, setLoading } = useContext(AppContext);

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const res = await axiosInstance({
                method: 'POST',
                url: '/insert',
                params: {
                    db: 'sample_analytics',
                    collection: 'accounts'
                },
                data: {
                    "account_id": 10,
                    "limit": 10,
                    "products": [
                        "string"
                    ]
                }
            })
            setLoading(false)
            setDefaultId(res?.data?.id)
            Swal.fire({
                icon: 'success',
                title: 'Item Inserted',
                text: "Item inserted ID: " + res?.data?.id
            })
        } catch (e) {
            console.error(e);
            Swal.fire({
                icon: 'error',
                title: 'Client call error'
            })
        }
    }

    return <Card title="CREATE" titleCss="mongodbColor">
        <div>CONTENT</div>
        <button className='Button' style={{ backgroundColor: 'green' }} onClick={handleSubmit}>Let's try!</button>
    </Card>
}

CreateCard.propTypes = {};

CreateCard.defaultProps = {};

export default CreateCard;