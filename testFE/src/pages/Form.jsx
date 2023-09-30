import React from 'react'
import * as yup from 'yup'
import { Formik } from "formik"
import { TextField, Button } from "@mui/material";


export default function Form({ varName, varCaseNumber, varDelayedUntil, varAddress, varSignPermitNumber, varPosseURL, varAttached }) {

    const initialValues = varName === 'SPSD CA Sign' ? {
        posseURL: "",
        attached: "",
        signPermitNumber: "",
        dimensionX: 30.0,
        dimensionY: 24.0,
    } : varName === 'Demolition Delay' ? {
        address: "",
        delayedUntil: "",
        dimensionX: 30.0,
        dimensionY: 24.0,
    } : {
        caseNumber: "",
        dimensionX: 30.0,
        dimensionY: 24.0,
    }

    const signSchema = varName === 'SPSD CA Sign' ?
        yup.object().shape({
            dimensionX: yup.number().required("required"),
            dimensionY: yup.number().required("required"),
            posseURL: yup.number().required("required"),
            attached: yup.number().required("required"),
            signPermitNumber: yup.number().required("required"),
        })
        : varName === 'Demolition Delay' ? yup.object().shape({
            dimensionX: yup.number().required("required"),
            dimensionY: yup.number().required("required"),
            address: yup.number().required("required"),
            delayedUntil: yup.number().required("required"),

        }) : yup.object().shape({
            caseNumber: yup.string().matches(/^av\d{3}-\d{3}$/i, "Case number is not valid").required("required"),
            dimensionX: yup.number().required("required"),
            dimensionY: yup.number().required("required"),

        })

    function handleFormSubmit(values) {
        console.log(values, varName);
    }

    return (
        <div style={{ display: 'block' }} >

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={signSchema}
            >
                {({ values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit, resetForm }) => (
                    <form onSubmit={handleSubmit}>
                        {varCaseNumber && <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Case number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.caseNumber}
                            name="caseNumber"
                            error={!!touched.caseNumber && !!errors.caseNumber}
                            helperText={touched.caseNumber && errors.caseNumber}
                        />}
                        {varDelayedUntil && <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Delayed Until"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.delayedUntil}
                            name="delayedUntil"
                            error={!!touched.delayedUntil && !!errors.delayedUntil}
                            helperText={touched.delayedUntil && errors.delayedUntil}
                        />}
                        {varAddress && <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address}
                            name="address"
                            error={!!touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                        />}
                        {varSignPermitNumber && <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Sign Permit Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.signPermitNumber}
                            name="signPermitNumber"
                            error={!!touched.signPermitNumber && !!errors.signPermitNumber}
                            helperText={touched.signPermitNumber && errors.signPermitNumber}
                        />}
                        {varPosseURL && <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Posse URL"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.posseURL}
                            name="posseURL"
                            error={!!touched.posseURL && !!errors.posseURL}
                            helperText={touched.posseURL && errors.posseURL}
                        />}
                        {varAttached && <TextField
                            fullWidth
                            variant="filled"
                            type="text"
                            label="Attached"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.attached}
                            name="attached"
                            error={!!touched.attached && !!errors.attached}
                            helperText={touched.attached && errors.attached}
                        />}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Dimension X inch"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.dimensionX}
                                name="dimensionX"
                                error={!!touched.dimensionX && !!errors.dimensionX}
                                helperText={touched.dimensionX && errors.dimensionX}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Dimension Y inch"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.dimensionY}
                                name="dimensionY"
                                error={!!touched.dimensionY && !!errors.dimensionY}
                                helperText={touched.dimensionY && errors.dimensionY}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button type="submit" color="secondary" variant="contained">
                                Submit
                            </Button>
                            <Button type="button" onClick={() => resetForm()} color="secondary" variant="contained">
                                Cancel
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>

        </div >
    )
}
