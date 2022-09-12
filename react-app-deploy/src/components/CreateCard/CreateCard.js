import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Swal from "sweetalert2";
import Card from '../Card/Card';
import './CreateCard.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

const CreateCard = ({ setDefaultId }) => {
    const { axiosInstance, setLoading } = useContext(AppContext);

    let initValues = {
        name: "Pippo Doc",
        description: "Pippo Description"
    }

    const handleSubmit = async (values) => {
        try {
            setLoading(true)
            const res = await axiosInstance({
                method: 'POST',
                url: '/insert',
                params: {
                    db: 'sample_analytics',
                    collection: 'accounts'
                },
                data: values
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
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Client call error'
            })
        }
    }

    return <Card title="CREATE" titleCss="mongodbColor">
        <Formik
            enableReinitialize
            initialValues={initValues}
            validationSchema={Yup.object({
                name: Yup.string().required("Name required!"),
                description: Yup.string().required("Description required!")
            })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                handleSubmit(values);
                resetForm(initValues)
                setSubmitting(false);
              }}
        >
            <Form>
                <div>
                    <span>NAME: </span>
                    <Field
                        type="text"
                        name="name"
                        className="Field"
                        placeholder="Name"
                    />
                    <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="name" />
                </div>
                <div>
                    <span>DESC.: </span>
                    <Field
                        type="text"
                        name="description"
                        className="Field"
                        placeholder="Description"
                    />
                    <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="description" />
                </div>
                <button className='Button bgMongodbColor' type="submit">Let's try!</button>
            </Form>
        </Formik>
    </Card>
}

CreateCard.propTypes = {};

CreateCard.defaultProps = {};

export default CreateCard;