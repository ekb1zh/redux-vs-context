type Indexable<T extends any = any> = {
  [key: string]: T
  [index: number]: T
}
