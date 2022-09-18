import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Swal from "sweetalert2";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import './DeleteCard.css';

const DeleteCard = ({ defObj, setDefObj }) => {
  const { axiosInstance, setLoading } = useContext(AppContext);

  let initValues = {
    id: defObj?.id ? defObj?.id : ""
  }

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await axiosInstance({
        method: 'DELETE',
        url: '/delete/' + values.id,
        params: {
          db: 'sample_analytics',
          collection: 'accounts'
        }
      })
      setLoading(false);
      setDefObj({});
      Swal.fire({
        icon: 'success',
        title: 'Item deleted',
        text: "Deletion result: " + JSON.stringify(res?.data)
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
      id: Yup.string().required("ID required!")
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
      <button className='Button' type="submit">Let's try!</button>
    </Form>
  </Formik>

}

DeleteCard.propTypes = {};

DeleteCard.defaultProps = {};

export default DeleteCard;