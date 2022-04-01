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

const FormFirst = props => {
  const classes = useStyle();
  const { onsubmitForm, formData } = props;
  const { email, password } = formData;

  return (
    <Formik
      initialValues={{ email, password }}
      enableReinitialize
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }

        if (!values.password) {
          errors.password = 'Required';
        } else if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)
        ) {
          errors.password = 'Invalid Password';
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
        <Form className={classes.container} title="User Form" autoComplete="off">
          <Grid container sm={12} spacing={3} justifyContent="center" alignItems="center">
            <Grid container item xs={4}>
              <Typography>Email</Typography>
              <Field name="email" type="email" variant="outlined" className="form-control" />
              <Grid item xs={12}>
                <ErrorMessage name="email" component="span" className={classes.errorSpan} />
              </Grid>
            </Grid>
            <Grid container item xs={4}>
              <Typography>Password</Typography>
              <Field name="password" type="password" variant="outlined" className="form-control" />
              <Grid item xs={12}>
                <ErrorMessage name="password" component="span" className={classes.errorSpan} />
              </Grid>
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

export default FormFirst;
