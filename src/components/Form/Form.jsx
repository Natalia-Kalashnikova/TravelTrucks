import { useState } from "react";
import css from './Form.module.css';
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import toast from "react-hot-toast";

const Form = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        comment: '',
    });
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const toggleDatePicker = () => {
        setIsDatePickerOpen(prevState => !prevState);
    };

    const formatDate = (startDate, endDate) => {
        if (!endDate) return '';
        return `${format(startDate, 'MM.dd.yyyy')} - ${format(endDate, 'MM.dd.yyyy')}`;
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value.trim(),
        }));
    };

    const handleDateChange = item => {
        setState([item.selection]);
    };

    const handleSendForm = e => {
        e.preventDefault();
        const { startDate, endDate } = state[0];
        toast.success(
            `Your data has been sent successfully! {name: ${formState.name}, email: ${formState.email}}, date: ${formatDate(startDate, endDate)}`,
            { duration: 8000 }
        );

        setFormState({
            name: '',
            email: '',
            comment: '',
        });
        setState([{
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        }]);
    };

    const handleDateSelect = () => {
        toggleDatePicker();
    };

    return (
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
                value={state[0].endDate ? formatDate(state[0].startDate, state[0].endDate) : ''}
                readOnly
            />
            {isDatePickerOpen && (
                <div className={css.dataPicker}>
                    <DateRange
                        className={css.dataPick}
                        editableDateInputs={false}
                        onChange={handleDateChange}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        minDate={new Date()} 
                        rangeColors={['#475467']}
                    />
                    <button className={css.selectDateBtn} type="button" onClick={handleDateSelect}>
                        Select Date
                    </button>
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
};

export default Form;