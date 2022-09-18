import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Swal from "sweetalert2";
import './UpdateCard.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

const UpdateCard = ({ defObj, setDefObj }) => {
    const { axiosInstance, setLoading } = useContext(AppContext);

    let initValues = {
        id: defObj?.id ? defObj?.id : "",
        name: defObj?.name ? defObj?.name : "",
        description: defObj?.description ? defObj?.description : ""
    }

    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            const res = await axiosInstance({
                method: 'PUT',
                url: '/update',
                params: {
                    db: 'sample_analytics',
                    collection: 'accounts'
                },
                data: values
            });
            setLoading(false);
            setDefObj(values);
            Swal.fire({
                icon: 'success',
                title: 'Item Updated',
                text: "Update result: " + res?.data
            });
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
            id: Yup.string().required("ID required!"),
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
                <label>ID</label><br/>
                <Field
                    type="text"
                    name="id"
                    className="Field"
                    placeholder="ID"
                />
                <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="id" />
            </div>
            <div>
                <label>Name</label>
                <Field
                    type="text"
                    name="name"
                    className="Field"
                    placeholder="Name"
                />
                <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="name" />
            </div>
            <div>
                <label>Description</label>
                <Field
                    type="text"
                    name="description"
                    className="Field"
                    placeholder="Description"
                />
                <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="description" />
            </div>
            <button className='Button bgReactColor' type="submit">Let's try!</button>
        </Form>
    </Formik>

}

UpdateCard.propTypes = {};

UpdateCard.defaultProps = {};

export default UpdateCard;