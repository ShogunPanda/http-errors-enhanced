export interface GenericObject {
  [key: string]: any
}

export type NodeError = NodeJS.ErrnoException

const processRoot = process.cwd()

export function pascalCase(original: string): string {
  const rest = original
    .slice(1)
    .toLowerCase()
    .replaceAll(/(\s+[a-z])/g, (_, char) => char.toUpperCase().trim())

  return original.slice(0, 1).toUpperCase() + rest
}

export function upperFirst(original: string): string {
  return original.slice(0, 1).toUpperCase() + original.slice(1)
}

export function lowerFirst(original: string): string {
  return original.slice(0, 1).toLowerCase() + original.slice(1)
}

export function addAdditionalProperties(target: GenericObject, source: GenericObject): void {
  for (const v in source) {
    if (v in target) {
      // Do not allow any overwriting here
      continue
    }

    target[v] = source[v]
  }
}

export function serializeError(error: Error, omitStack: boolean = false): GenericObject {
  const tag = (error as NodeError).code ?? error.name ?? 'Error'

  const serialized: GenericObject = {
    message: `[${tag}] ${error.message}`
  }

  if (!omitStack) {
    serialized.stack = (error.stack ?? '')
      .split('\n')
      .slice(1)
      .map(s => s.trim().replace(/^at /, '').replace(processRoot, '$ROOT'))
  }

  addAdditionalProperties(serialized, error)

  return serialized
}
