export default function InputText(props) {
    /* component basic input */
    const {
        id,
        name,
        type,
        placeholder,
        value,
        onChange,
        disabled=false,
    } = props;

    
    return (
        <div className="form-group">
            <label htmlFor={id}>{name}</label>
            <input
                type={type}
                className="form-control"
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />
        </div>
    );
}