import { useState } from "react";
import Happy from "../components/Happy";
const Intro = () => {
	const [num, setNum] = useState(1);
	return (
		<div>
			<div>Intro</div>
			<Happy />
			<div>{num}</div>
			<div onClick={() => setNum((num) => num + 1)}>click</div>
		</div>
	);
};
export default Intro;
