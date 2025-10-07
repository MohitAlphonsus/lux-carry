export default function Tags({
	productClosureType,
	productOuterMaterial,
	productStyle,
}) {
	return (
		<div className="tags">
			<span>{productClosureType}</span>
			<span>{productOuterMaterial}</span>
			<span>{productStyle}</span>
		</div>
	);
}
