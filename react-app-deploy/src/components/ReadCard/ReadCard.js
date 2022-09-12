import React, { useContext } from 'react';
import Card from '../Card/Card';
import Swal from "sweetalert2";
import { AppContext } from '../../contexts/AppContext';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import './ReadCard.css';

const ReadCard = ({defaultId}) => {
  const { axiosInstance,setLoading } = useContext(AppContext);

  let initValues = {
    id: defaultId ? defaultId : ""
  }

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      const res = await axiosInstance({
        method: 'GET',
        url: '/search/' + values.id,
        params: {
          db: 'sample_analytics',
          collection: 'accounts'
        }
      })
      setLoading(false)
      Swal.fire({
        icon: 'success',
        title: 'Item searched',
        text: "JSON formatted search result: " + JSON.stringify(res?.data)
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

  return <Card title="READ" titleCss="expressColor">
    <Formik
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
          <span>ID: </span>
          <Field
            type="text"
            name="id"
            className="Field"
            placeholder="ID"
          />
          <ErrorMessage render={msg => <div style={{ color: "red" }}>{msg}</div>} name="id" />
        </div>
        <button className='Button bgExpressColor' type="submit">Let's try!</button>
      </Form>
    </Formik>
  </Card>
};

ReadCard.propTypes = {};

ReadCard.defaultProps = {};

export default ReadCard;
