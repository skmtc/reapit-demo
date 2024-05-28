/** Request body used to update the geolocation coordinates of an existing property's address */
export type UpdatePropertyGeolocationModel = {
  latitude?: /** The latitude coordinate of the coordinate pair */ number | undefined
  longitude?: /** The longitude coordinate of the coordinate pair */ number | undefined
}
