// "use client";
// import { useFormik } from "formik";
// import React, { useCallback, useEffect, useState } from "react";
// import * as Yup from "yup";
// import { useParams, useRouter } from "next/navigation";

// export const MCQCSR = (data) => {
//     const [activeStep, setActiveStep] = useState(0);
//     const router = useRouter();
//     const { startDetails } = useParams()
//     const initialFormValues = {
//         Role: '',
//         Employees: '',
//         Project: '',
//         Duration: '',
//         Time: '',
//         Skills: '',
//         StartOff: '',
//         name: "",
//         email: "",
//         phone: "",
//         country: "",
//         agreement: false,

//     };
//     const validationSchema = Yup.object({
//         name: Yup
//             .string()
//             .required("Name is required")
//             .min(3, "Name should be at least 3 characters")
//             .max(60, 'Name should be at most 60 characters'),
//         email: Yup.string().email().required("Please enter your email"),
//         phone: Yup.string().required("Phone Number is required").min(11, "Phone Number should be at least 11 digits"),
//         contactAgreement: Yup.bool()
//             .oneOf([true], "Agreement is required")
//             .required("Agreement is required"),
//         country: Yup.string()
//             .required("Please select a country")
//     })

//     const [formValues, setFormValues] = useState(() => {
//         const storedValues = localStorage.getItem("formValues");
//         return storedValues ? JSON.parse(storedValues) : initialFormValues;
//     });
//     const formik = useFormik({
//         initialValues: formValues,
//         validationSchema,
//         onSubmit: (values, action) => {
//             const formDatab = new FormData();
//             Object.entries(values).forEach(([key, value]) => {
//                 formDatab.append(key, value);
//             });
//             fetch(
//                 "https://script.google.com/macros/s/AKfycbyt50pAhM6UzcHxL0hH-3lcur3kIde68ALKclZr91Xq8mqMD-d0fAaQ2ttihMkkiRI-5A/exec",
//                 {
//                     method: "POST",
//                     body: formDatab
//                 }
//             )
//                 .then((res) => {
//                     res.json()
//                     formik.resetForm();
//                     localStorage.removeItem("formValues");
//                 })
//                 .then((data) => {
//                     console.log(data);
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         },
//     });

//     const handleAddSelectedTag = (value) => {
//         formik.setFieldValue("Skills", value);
//     };
//     const handleNext = (route) => {
//         localStorage.setItem("formValues", JSON.stringify(formik.values));
//         router.push(route)
//     };
//     const handleBack = () => {
//         router.back()
//     };

//     const handleFilterdIndex = useCallback(() => {
//         const filteredIndex = data?.cardData?.findIndex((item) =>
//             item?.route?.includes(startDetails)
//         ) ?? -1;
//         setActiveStep(filteredIndex);
//     }, [data?.cardData, startDetails]);

//     useEffect(() => {
//         handleFilterdIndex();
//     }, [handleFilterdIndex]);

//     const isFormCompleted = 'form' === startDetails;
//     return {
//         activeStep, isFormCompleted, handleNext, handleBack, handleAddSelectedTag, formik
//     };
// };



"use client";
import { useFormik } from "formik";
import React, { useCallback, useMemo, useState } from "react";
import * as Yup from "yup";
import { useParams, useRouter } from "next/navigation";

export const MCQCSR = (data) => {
    const [activeStep, setActiveStep] = useState(0);
    const router = useRouter();
    const { startDetails } = useParams();

    const initialFormValues = {
        Role: '',
        Employees: '',
        Project: '',
        Duration: '',
        Time: '',
        Skills: '',
        StartOff: '',
        name: "",
        email: "",
        phone: "",
        country: "",
        agreement: false,
    };

    const validationSchema = Yup.object({
        name: Yup
            .string()
            .required("Name is required")
            .min(3, "Name should be at least 3 characters")
            .max(60, 'Name should be at most 60 characters'),
        email: Yup.string().email().required("Please enter your email"),
        phone: Yup.string().required("Phone Number is required").min(11, "Phone Number should be at least 11 digits"),
        contactAgreement: Yup.bool()
            .oneOf([true], "Agreement is required")
            .required("Agreement is required"),
        country: Yup.string()
            .required("Please select a country")
    });
    const [formValues, setFormValues] = useState(initialFormValues);

    useEffect(() => {
        const stored = localStorage.getItem("formValues");
        if (stored) {
            setFormValues(JSON.parse(stored));
        }
    }, []);



    const formik = useFormik({
        initialValues: formValues,
        validationSchema,
        onSubmit: (values, action) => {
            const formDatab = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                formDatab.append(key, value);
            });
            fetch(
                "https://script.google.com/macros/s/AKfycbyt50pAhM6UzcHxL0hH-3lcur3kIde68ALKclZr91Xq8mqMD-d0fAaQ2ttihMkkiRI-5A/exec",
                {
                    method: "POST",
                    body: formDatab
                }
            )
                .then((res) => {
                    res.json();
                    formik.resetForm();
                    localStorage.removeItem("formValues");
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    const handleAddSelectedTag = (value) => {
        formik.setFieldValue("Skills", value);
    };

    const handleNext = (route) => {
        localStorage.setItem("formValues", JSON.stringify(formik.values));
        router.push(route);
    };

    const handleBack = () => {
        router.back();
    };

    const handleFilterdIndex = useCallback(() => {
        const filteredIndex = data?.cardData?.findIndex((item) =>
            item?.route?.includes(startDetails)
        ) ?? -1;
        return filteredIndex;
    }, [data?.cardData, startDetails]);

    useMemo(() => {
        const index = handleFilterdIndex();
        setActiveStep(index);
    }, [handleFilterdIndex]);

    const isFormCompleted = 'form' === startDetails;

    return {
        activeStep, isFormCompleted, handleNext, handleBack, handleAddSelectedTag, formik
    };
};
