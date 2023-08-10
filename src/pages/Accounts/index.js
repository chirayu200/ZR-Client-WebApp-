import React, { useState } from "react";
import SplashScreen from "./Splash";
import SignupScreen from "./Signup";
export default function AuthenticationMain({ onLogin }) {
	const [steps, setSteps] = useState(0);
	const renderStepComponent = () => {
		switch (steps) {
			case 1:
				return (
					<SignupScreen
						setActiveScreen={setSteps}
						activeScreen={steps}
						onLogin={onLogin}
					/>
				);
				
			default:
				return <SplashScreen handleNext={() => setSteps(1)} />;
		}
	};
	return <>{renderStepComponent()}</>;
}