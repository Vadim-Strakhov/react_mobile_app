import "./MenuItem.scss";

export const MenuItem = ({ icon, onClick, isActive }) => {
	const cls = isActive ? "MenuItem active" : "MenuItem";
	return (
		<div className="MenuItem" onClick={onClick}>
			<i className={`io-${icon}`} />
			{isActive && (
				<div className="MenuItem__dot"></div>
			)}
		</div>
	);
};
