/** Deep clones all properties except functions */
export function clone<T extends object>(obj: T): T {
  let result = obj;
  const type = {}.toString.call(obj).slice(8, -1);
  if (type === 'Set') {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    return new Set([...(obj as any)].map((value) => clone(value))) as T;
  }
  if (type === 'Map') {
    return new Map(
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      [...(obj as any)].map((kv) => [clone(kv[0]), clone(kv[1])])
    ) as T;
  }
  if (type === 'Date') {
    return new Date((obj as Date).getTime()) as T;
  }
  if (type === 'RegExp') {
    return RegExp((obj as RegExp).source, getRegExpFlags(obj)) as T;
  }
  if (type === 'Array' || type === 'Object') {
    result = Array.isArray(obj) ? ([] as T) : ({} as T);
    for (const key in obj) {
      // include prototype properties
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      (result as any)[key] = clone((obj as any)[key]);
    }
  }
  // primitives and non-supported objects (e.g. functions) land here
  return result;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function getRegExpFlags(regExp: any) {
  if (typeof regExp.source.flags === 'string') {
    return regExp.source.flags;
  } else {
    const flags = [];
    regExp.global && flags.push('g');
    regExp.ignoreCase && flags.push('i');
    regExp.multiline && flags.push('m');
    regExp.sticky && flags.push('y');
    regExp.unicode && flags.push('u');
    return flags.join('');
  }
}
