export default (OWM_API_KEY = '5634c8194969006374f4ce44e7339577');
/**
 * <Tips on how to use OpenWeatherMap API effectively>
 * 1. We recommend making calls to the API no more than one time every 10 minutes for one location (city / coordinates / zip-code). This is due to the fact that weather data in our system is updated no more than one time every 10 minutes.
 * 2. The server name is api.openweathermap.org. Please, never use the IP address of the server.
 * 3. Better call API by city ID instead of a city name, city coordinates or zip code to get a precise result. The list of cities' IDs is here.
 * 4. Please, mind that Free and Startup accounts have limited data availability. If you do not receive a response from the API, please, wait at least for 10 min and then repeat your request. We also recommend you to store your previous request.
 *
 * Limit of calls: 60/minute (Free tier)
 * Error Code(over the limit of calls): {cod: '429'}
 */
