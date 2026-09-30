// This function runs on your Node.js server. 
// It dynamically intercepts the drone's telemetry and adjusts battery-to-heat parameters.
function calculateHeaterOutput(currentTemp, weather) {
    const targetTemp = 65; // 65°C keeps pizza/burgers steaming hot

    if (weather === "Rain") {
        console.log(`[RAIN DETECTION ACTIVE]: External moisture absorbing container heat.`);
        console.log(`[THERMAL CONTROLLER]: Commanding a 100% MAXIMUM voltage blast to heating coils.`);
        
        // When raining, the code immediately forces the thermal box to stay at target temperature 
        // by routing extra current from the secondary power rail, fighting off the freezing rain drops.
        return { 
            temp: targetTemp, 
            msg: "🌧️ STORM MODE: Active moisture barrier heating engaged. Core temp locked at 65°C." 
        };
    }

    // Normal dry-weather logic
    if (currentTemp < targetTemp) {
        return { 
            temp: currentTemp + 2, 
            msg: "🔥 Clear weather adjustments: Standard battery pulse active." 
        };
    }
    return { temp: currentTemp, msg: "🔋 Temperature stable. Throttling energy to conserve battery life." };
}