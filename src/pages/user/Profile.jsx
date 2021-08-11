import React,{useState} from 'react';
import _ from 'lodash';
import withUserDashboardLayout from '../../HOC/withUserDashboard';
import { getFormSchema, handleInputChange } from '../../utils/forms-utils';
import SectionHeader from '../../components/SectionHeader';


const Profile = () => {
    const [field, setField] = useState({firstName:'', lastName:'', email:'', phoneNumber:''});
    const formSchema = getFormSchema(field).filter(schema => Object.keys(field).includes(schema.name));

    return(
    <>
    <SectionHeader text='profile' icon='person-fill' />
    <section className='row'>
        <div className="col-md-5">
            <form >
            {formSchema.map(({id,name,value,label, type},index)=>(
                <div className="mb-3" key={`${index}${name}`}>
                <label htmlFor={id} className="form-label text-capitalize text-black-50">{label}</label>
                <input type={type} name={name}  value={value} onChange={(e)=>handleInputChange(e,setField)} className="form-control form-control-lg" id={id} />
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
