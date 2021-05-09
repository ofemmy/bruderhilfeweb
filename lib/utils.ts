export function parsePortableText(portableText) {
  const paragraphs = portableText.map((item) => item.children[0].text);
  return paragraphs;
}
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function gridColArrayGen(length) {
  let sequence = [
    [1, 2],
    [2, 1],
  ];
  let res = [];
  for (let i = 0; i < length; i++) {
    res.push(...sequence[i % 2]);
  }
  return res;
}
