/** Request body used to update an existing property image */
export type UpdatePropertyImageModel = {
  caption?: /** The image caption */ string | undefined
  type?: /** The type of image (photograph/floorPlan/epc/map) */ string | undefined
}
