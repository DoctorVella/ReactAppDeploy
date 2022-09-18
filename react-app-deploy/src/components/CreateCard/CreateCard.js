import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Swal from "sweetalert2";
import './CreateCard.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

const CreateCard = ({ setDefObj }) => {
    const { axiosInstance, setLoading } = useContext(AppContext);

    let initValues = {
        name: "Pippo Doc",
        description: "Pippo Description"
    }

    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            const res = await axiosInstance({
                method: 'POST',
                url: '/insert',
                params: {
                    db: 'sample_analytics',
                    collection: 'accounts'
                },
                data: values
            });
            setLoading(false);
            values.id = res?.data?.id;
            setDefObj(values);
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

    return <Formik
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
                <label>Name</label><br/>
                <Field
                    type="text"
                    name="name"
                    className="Field"
                    placeholder="Name"
                />
                <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="name" />
            </div>
            <div>
                <label>Description</label><br/>
                <Field
                    type="text"
                    name="description"
                    className="Field"
                    placeholder="Description"
                />
                <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="description" />
            </div>
            <button className='Button' type="submit">Let's try!</button>
        </Form>
    </Formik>
}

CreateCard.propTypes = {};

CreateCard.defaultProps = {};

export default CreateCard;