import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Swal from "sweetalert2";
import Card from '../Card/Card';
import './UpdateCard.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";

const UpdateCard = ({defaultId,docValues,setDocValues}) => {
    const { axiosInstance, setLoading } = useContext(AppContext);

    let initValues = {
        id: defaultId ? defaultId : "",
        name: docValues?.name ? docValues.name : "",
        description: docValues?.description ? docValues.description : ""
    }

    const handleSubmit = async (values) => {
        try {
            setLoading(true)
            const res = await axiosInstance({
                method: 'PUT',
                url: '/update',
                params: {
                    db: 'sample_analytics',
                    collection: 'accounts'
                },
                data: values
            })
            setLoading(false)
            setDocValues(values)
            Swal.fire({
                icon: 'success',
                title: 'Item Updated',
                text: "Update result: " + res?.data
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

    return <Card title="UPDATE" titleCss="reactColor">
    <Formik
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
                <span>ID: </span>
                <Field
                    type="text"
                    name="id"
                    className="Field"
                    placeholder="ID"
                />
                <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="id" />
            </div>
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
            <button className='Button bgReactColor' type="submit">Let's try!</button>
        </Form>
    </Formik>
</Card>

}

UpdateCard.propTypes = {};

UpdateCard.defaultProps = {};

export default UpdateCard;