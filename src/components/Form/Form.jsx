import { useState } from "react";
import css from './Form.module.css';
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import toast from "react-hot-toast";


const Form =()=>{
    const [formState, setFormState] = useState({
        startDate: new Date(),
        endDate: null,
        name: '',
        email: '',
        comment: '',
    });
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const toggleDatePicker =()=>{
        setIsDatePickerOpen(prevState => !prevState);
    };

    const formatDate = (startDate, endDate) =>{
        if(!endDate) return '';
        return `${format(startDate, 'MM.dd.yyyy')} - ${format(endDate, 'MM.dd.yyyy'
        )}`;
    };

    const handleChange =e=>{
        const{name, value} = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value.trim(),
        }));
    };

    const handleDateChange = item =>{
        setFormState(prevState =>({
            ...prevState,
            startDate: item.selection.startDate,
            endDate: item.selection.endDate,
        }));
    };

    const handleSendForm =e=>{
        e.preventDefault();
        toast.success(
            `Your data has been sent successfully! {name: ${formState.name}, email: ${formState.email}}, date: ${formatDate(formState.startDate, formState.endDate)}`
        );

        setFormState({
            startDate: new Date(),
            endDate: null,
            name: '',
            email: '',
            comment: '',
        });
    };

    return(
        <form className={css.form} onSubmit={handleSendForm}>
            <h2 className={css.formTitle}>Book your campervan now</h2>
            <p className={css.formText}>
            Stay connected! We are always ready to help you.
            </p>
            <input 
                className={css.input} 
                type="text" 
                name="name" 
                required 
                placeholder="Name*" 
                onChange={handleChange} 
                value={formState.name} 
            />
            <input 
                className={css.input} 
                type="email" 
                name="email" 
                required 
                placeholder="Email*" 
                onChange={handleChange} 
                value={formState.email} 
            />
            <input 
                className={css.input} 
                type="text" 
                placeholder="Booking date*" 
                onClick={toggleDatePicker} 
                value={formState.endDate ? formatDate(formState.startDate, formState.endDate) : ''}
                readOnly
            />
            {isDatePickerOpen && (
                <div className={css.dataPickew}>
                    <DateRangePicker className={css.dataPick}
                    onChange={handleDateChange}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    ranges={[
                        {
                            startDate: formState.startDate,
                            endDate: formState.endDate,
                            key: 'selection',
                        },
                    ]}                    
                    />
                </div>
            )}
            <textarea
            className={css.commentInput}
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
            value={formState.comment} 
            />
            <button className={css.sendBtn} type="submit">Send</button>                       
        </form>
    );
}

export default Form;