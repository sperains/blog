
interface Student {
  name: string,
  age: number
}

// 1. 把一个类型的每个属性都变为可空的
type Nullable<T> = {
  [Property in keyof T]: T[Property] | null
}


// 2. 把一个类型的每个属性都变为只读的
type Readonly1<T> = {
  readonly [Property in keyof T]: T[Property]
}

// 3. 把一个类型的属性都变为可选的
type Optional<T> = {
  [Property in keyof T]?: T[Property]
}

// 4. 把一个类型的每项都变为Promise
type ToPromise<T> = {
  [ K in keyof T]: Promise<T[K]>;
}