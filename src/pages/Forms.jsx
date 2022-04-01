import { makeStyles } from '@material-ui/core';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormFirst from './Form1';
import FormSecond from './Form2';
import FormThird from './Form3';
import { submitForm } from './API';

const useStyle = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    height: '50%',
    width: '70%',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
});

const Forms = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phonenumber: '',
    countrycode: '',
    address: '',
  });

  const onSubmitAllForms = async Data => {
    const result = await submitForm(Data);
    if (result.message === 'Success') {
      navigate('/posts');
    }
  };

  const onsubmitForm = data => {
    const Data = {
      ...formData,
      ...data,
    };
    setFormData(Data);
    if (tab === 0) {
      setTab(1);
    } else if (tab === 1) {
      setTab(2);
    } else if (tab === 2) {
      onSubmitAllForms(Data);
    }
  };

  return (
    <Container className={classes.card}>
      {tab === 0 && (
        <FormFirst tab={tab} setTab={setTab} onsubmitForm={onsubmitForm} formData={formData} />
      )}
      {tab === 1 && (
        <FormSecond tab={tab} setTab={setTab} onsubmitForm={onsubmitForm} formData={formData} />
      )}
      {tab === 2 && (
        <FormThird tab={tab} setTab={setTab} onsubmitForm={onsubmitForm} formData={formData} />
      )}
    </Container>
  );
};

export default Forms;
