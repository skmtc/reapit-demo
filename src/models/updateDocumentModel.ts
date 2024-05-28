/** Request body used to update an existing document */
export type UpdateDocumentModel = {
  typeId?: /** The unique identifier of the type of document */ string | undefined
  name?: /** The filename of the document */ string | undefined
  isPrivate?: /** A flag denoting whether or not the document is private */ boolean | undefined
  metadata?: /** App specific metadata to set against the document */ Record<string, Record<string, never>> | undefined
}
