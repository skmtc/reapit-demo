/** Request body used to update an existing source of business */
export type UpdateSourceModel = {
  name?: /** The name of the source or advertising publication */ string | undefined
  type?: /** The type of the source (source/advertisement) */ string | undefined
  officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
  Array<string> | undefined
  departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
  Array<string> | undefined
}
