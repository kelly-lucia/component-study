
export const isValidComponentSize = (val: string) => 
['', 'large', 'medium', 'small', 'mini'].includes(val);

export const isValidComponentType = (val: string) =>
[
"default",
"primary",
"success",
"warning",
"info",
"danger",
"text",
].includes(val)
