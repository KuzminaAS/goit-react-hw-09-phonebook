import ButtonForm from '../../shared/components/ButtonForm';
import { Formik, Form, Field } from "formik";
import { initialValues } from './initialValues';
import { fields } from "./fields";
import { useDispatch} from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterView.module.css'


const RegisterView = () => {

  const dispatch = useDispatch();

    return (
      <Formik
        onSubmit={(values) => {dispatch(authOperations.register(values))}}
        initialValues={initialValues} 
      >
        <Form 
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            <Field className={styles.field}
               {...fields.name}
            />
          </label>

          <label className={styles.label}>
            <Field className={styles.field}
             {...fields.email}
            />
          </label>

          <label className={styles.label}>
            <Field className={styles.field}
              {...fields.password}
            />
          </label>

          <ButtonForm>Registration</ButtonForm>
        </Form>
      </Formik>
    );
}
export default RegisterView;
