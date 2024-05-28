/** Request body used to update an existing area */
export type UpdateAreaModel = {
  name?: /** The name of the area */ string | undefined
  area?: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments associated to the area */
  Array<string> | undefined
  officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  Array<string> | undefined
}
