import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Grid, Button, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  errorSpan: {
    color: 'red',
    fontSize: 14,
  },
});

const FormSecond = props => {
  const classes = useStyle();
  const { onsubmitForm, formData, setTab } = props;
  const { firstname, lastname, address } = formData;

  return (
    <Formik
      initialValues={{ firstname, lastname, address }}
      enableReinitialize
      validate={values => {
        const errors = {};
        if (!values.firstname) {
          errors.firstname = 'Required';
        } else if (values.firstname.length < 2 || values.firstname.length > 50) {
          errors.firstname = 'Minimum of 2 character and maximum 50';
        }

        if (values.firstname && !/^[A-Za-z]+$/.test(values.firstname)) {
          errors.firstname = 'Should contain only alphabets';
        } else if (values.lastname && !/^[A-Za-z]+$/.test(values.lastname)) {
          errors.lastname = 'Should contain only alphabets';
        } else if (!values.address) {
          errors.address = 'Required';
        } else if (values.address.length < 10) {
          errors.address = 'Minimum length should be 10';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (setSubmitting) {
          onsubmitForm(values);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={classes.container}>
          <Grid container sm={12} spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <Typography>First Name</Typography>
              <Field name="firstname" type="text" variant="outlined" className="form-control" />
              <ErrorMessage name="firstname" component="div" className={classes.errorSpan} />
            </Grid>
            <Grid item xs={6}>
              <Typography>Last Name</Typography>
              <Field name="lastname" type="text" variant="outlined" className="form-control" />
              <ErrorMessage name="lastname" component="div" className={classes.errorSpan} />
            </Grid>
            <Grid item xs={6}>
              <Typography>Address</Typography>
              <Field name="address" type="text" variant="outlined" className="form-control" />
              <ErrorMessage name="address" component="div" className={classes.errorSpan} />
            </Grid>
            <Grid container item justifyContent="flex-start">
              <Button
                color="primary"
                type="back"
                disabled={isSubmitting}
                variant="contained"
                onClick={() => setTab(0)}
              >
                Back
              </Button>
            </Grid>
            <Grid container item justifyContent="flex-end">
              <Button color="primary" type="submit" disabled={isSubmitting} variant="contained">
                Save and Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FormSecond;
