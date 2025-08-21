interface CreateDynamicAtomOptions {
  field: string
  values: string[]
}

export function createDynamicAtom(spaces: Record<string, number>, options: CreateDynamicAtomOptions) {
  const style: Record<string, Record<string, number>> = {}
  Object.entries(spaces).forEach(([spaceName, spaceValue]) => {
    style[`${options.field}_${spaceName}`] = options.values.reduce((acc, value) => {
      acc[value] = spaceValue
      return acc
    }, {} as Record<string, number>)
  })

  return style
}
