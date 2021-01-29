import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { Formik } from 'formik';

import ModalContext from '../OtherHooks/ModalContext'

import { COLORS } from '../Styles/GLOBALSTYLES';
import '../Styles/Greeting.css'
import '../Styles/PostSneaker.css'

import { postSneakers } from '../HelperFunctions/MainCRUD'

export default function PostSneaker() {
    const {showModal, setShowModal} = useContext(ModalContext);

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          width                 : '30%',
          height                : '30%',
          display               : 'flex',
          flexDirection         : 'column',
          alignItems            : 'center',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };

    return (
        <Modal
          ariaHideApp={false}
          isOpen={showModal}
          onRequestClose={() => setShowModal(!showModal)}
          style={customStyles}
        >
 
        <h2 className="greeting" style={{backgroundImage: COLORS.grad, fontSize: "2rem", marginBottom: '0.75rem'}}>Post your kicks</h2>
        <Formik
            initialValues={{ shoe_name: '', shoe_link: '' }}
            onSubmit={(values, { setSubmitting }) => {
                const send = async () => {
                    await postSneakers(values);
                    setShowModal(!showModal);
                }
                send();
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <p>Sneaker Name</p>
                    <input
                        type="text"
                        name="shoe_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        />
                    {errors.email && touched.email && errors.email}
                    <p>Link to an Image</p>
                    <input
                        type="url"
                        name="shoe_link"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                {errors.password && touched.password && errors.password}
                <button style={{backgroundImage: COLORS.grad, color: COLORS.light}} type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </form>
            )}
        </Formik>
        </Modal>
    )
}
