import './ProgressBar.scss';

const ProgressBar = ({ addClass, percent }) => (
	<div className={`progress-bar ${addClass ? addClass : ''}`}>
		<div className="progress-bar__inner" style={{ width: `${percent}%` }}></div>
	</div>
);

export default ProgressBar;
