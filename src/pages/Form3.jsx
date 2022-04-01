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

const FormThird = props => {
  const classes = useStyle();
  const { formData, onsubmitForm, setTab } = props;
  const { countrycode, phonenumber, address, acceptTermsAndCondition } = formData;

  return (
    <Formik
      initialValues={{
        countrycode,
        phonenumber,
        address,
        acceptTermsAndCondition,
      }}
      validate={values => {
        const errors = {};
        if (!values.countrycode) {
          errors.countrycode = 'Required';
        } else if (!values.phonenumber) {
          errors.phoneNumber = 'Required';
        } else if (!values.phonenumber.match('[0-9]+')) {
          errors.phoneNumber = 'Should contain 10 digit numeric';
        } else if (!values.acceptTermsAndCondition || values.acceptTermsAndCondition.length === 0) {
          errors.acceptTermsAndCondition = 'Required';
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
              <Typography>countrycode</Typography>
              <Field as="select" name="countrycode" className="form-control">
                <option value="Select country code" label="Select country code">
                  Select country code
                </option>
                <option value="+91" label="+91">
                  India (+91)
                </option>
                <option value="+1" label="+1">
                  America (+1)
                </option>
              </Field>
              <ErrorMessage name="countrycode" component="div" className={classes.errorSpan} />
            </Grid>
            <Grid item xs={6}>
              <Typography>phoneNumber</Typography>
              <Field
                name="phonenumber"
                type="text"
                variant="outlined"
                fullWidth
                className="form-control"
              />
              <ErrorMessage name="phonenumber" component="div" className={classes.errorSpan} />
            </Grid>
            <Grid item xs={6}>
              <label>
                <Field type="checkbox" name="acceptTermsAndCondition" value="Agree" />
                Accept Terms And Conditions
              </label>
              <ErrorMessage
                name="acceptTermsAndCondition"
                component="div"
                className={classes.errorSpan}
              />
            </Grid>
            <Grid container item justifyContent="flex-start">
              <Button
                color="primary"
                type="back"
                disabled={isSubmitting}
                variant="contained"
                onClick={() => setTab(1)}
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

export default FormThird;
