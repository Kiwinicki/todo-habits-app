import './ProgressRing.scss';

const ProgressRing = ({ radius, stroke, progressPerc, children, addClass }) => {
	const circumference = radius * 2 * Math.PI;
	const strokeDashoffset = circumference - (progressPerc / 100) * circumference;

	return (
		<svg
			width="64"
			height="64"
			className={`progress-ring ${addClass ? addClass : ''}`}
		>
			<circle
				className="progress-ring__circle progress-ring__circle--bg"
				strokeWidth={stroke}
				r={radius - stroke / 2}
				cx={radius}
				cy={radius}
			/>
			<circle
				className="progress-ring__circle progress-ring__circle--indicator"
				strokeWidth={stroke}
				strokeDasharray={`${circumference} ${circumference}`}
				strokeDashoffset={strokeDashoffset}
				r={radius - stroke / 2}
				cx={radius}
				cy={radius}
			/>
			<text className="progress-ring__text" x="50%" y="50%">
				{children}
			</text>
		</svg>
	);
};

export default ProgressRing;
