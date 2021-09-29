import './Label.scss';

const Label = ({ children, addClass }) => (
	<label className={`label ${addClass ? addClass : ''}`}>{children}</label>
);

export default Label;
