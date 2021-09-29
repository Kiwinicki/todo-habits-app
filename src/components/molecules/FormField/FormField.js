import Input from '@atoms/Input/Input';
import Label from '@atoms/Label/Label';

const FormField = ({
	type = 'text',
	value,
	name = null,
	labelClass,
	inputClass,
	placeholder = null,
	handleChange,
	validation,
	register,
	children,
}) => {
	return (
		<Label addClass={labelClass}>
			{children}
			<Input
				type={type}
				name={name}
				value={value}
				addClass={inputClass}
				placeholder={placeholder}
				handleChange={handleChange}
				validation={validation}
				register={register}
			/>
		</Label>
	);
};

export default FormField;
