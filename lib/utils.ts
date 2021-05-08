export function parsePortableText(portableText) {
    const paragraphs = portableText.map((item) => item.children[0].text);
    return paragraphs;
  }