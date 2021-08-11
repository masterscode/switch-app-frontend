const getFormSchema = (state) => [
  {
    type: 'text',
    name: 'firstName',
    value: state.firstName,
    id: 'first-name',
    label: 'first name',
  },
  {
    type: 'text',
    name: 'lastName',
    value: state.lastName,
    id: 'last-name',
    label: 'last name',
  },
  {
    type: 'tel',
    name: 'phoneNumber',
    value: state.phoneNumber,
    id: 'phone number',
    label: 'phone number',
  },
  {
    type: 'email',
    name: 'email',
    value: state.email,
    id: 'email',
    label: 'email',
  },
  {
    type: 'password',
    name: 'password',
    value: state.password,
    id: 'password',
    label: 'password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    value: state.confirmPassword,
    id: 'confirm-password',
    label: 'confirm password',
  },
];

const handleInputChange = (e, setState)=>{
  const { name, value } = e.target;
  setState(prev => ({ ...prev, [name]: value }));
}

export { getFormSchema, handleInputChange };
