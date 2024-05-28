/** Request body to update the internal dimensions of an existing property */
export type UpdatePropertyInternalAreaModel = {
  type?: /** The unit of area (squareFeet/squareMetres) */ string | undefined
  min?: /** The minimum area bound */ number | undefined
  max?: /** The maximum area bound */ number | undefined
}
