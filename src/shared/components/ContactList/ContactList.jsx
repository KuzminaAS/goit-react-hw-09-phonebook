import {useCallback} from "react"
import ContactListItem from '../ContactListItem';
import { ReactComponent as UserIcon } from '../../../icons/user.svg'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import operations from '../../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../../redux/store';
import styles from './ContactList.module.css'

const ContactList = () => {

    const visibleContacts = useSelector(state => getVisibleContacts(state), shallowEqual);

    const dispatch = useDispatch();
    const onDelete = useCallback((id) => dispatch(operations.deleteContact(id)), [dispatch]);
 
    const contactElements = visibleContacts.map((item) => <ContactListItem  key={item.id} {...item} onDelete={()=>onDelete(item.id)}> <UserIcon/> </ContactListItem>)
    return (
        <ul className={styles.list}>
            {contactElements}
        </ul>
    
    )
};

export default ContactList;
