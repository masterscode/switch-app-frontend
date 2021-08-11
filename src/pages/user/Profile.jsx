import React,{useState} from 'react';
import _ from 'lodash';
import withUserDashboardLayout from '../../HOC/withUserDashboard';
import { getFormSchema } from '../../utils/form-schemas';

const Profile = () => {
    const [field, setField] = useState({firstName:'', lastName:'', email:'', phoneNumber:''});
    const excl = ['password', 'confirmPassword'];
    const formSchema = getFormSchema(field).filter(schema => !excl.includes(schema.name));

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setField(prev => ({ ...prev, [name]: value }));
    }
    return(
    <>
    <header className='d-flex fw-bold mb-5 fs-3 justify-content-start align-items-center'>
    <i className="bi-person-fill me-3"> </i>
    <div className='text-capitalize'> profile</div>
    </header>
    <section className='row'>
        <div className="col-md-5">
            <form >
            {formSchema.map(({id,name,value,label, type},index)=>(
                <div className="mb-3" key={`${index}${name}`}>
                <label htmlFor={id} className="form-label text-capitalize text-black-50">{label}</label>
                <input type={type} name={name}  value={value} onChange={handleChange} className="form-control form-control-lg" id={id} />
              </div>
            ))}
                <button type="submit" className='w-100 btn btn-lg btn-warning text-uppercase fw-normal'>update profile</button>
            </form>
        </div>
    </section>
    </>
);
    }

export default withUserDashboardLayout(Profile);
