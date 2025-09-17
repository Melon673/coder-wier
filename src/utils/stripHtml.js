

export default function stripHtml(html) {
  if (!html || typeof html !== "string") return "";

  if (typeof window !== "undefined") {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.innerText
      .replace(/&nbsp;/g, " ") 
      .replace(/<\/p>/g, "\n") 
      .replace(/<[^>]*>?/gm, "") 
      .split("\n") 
      .map(line => line.trim())
      .filter(line => line) 
      .join("\n"); 
  }

  return html
    .replace(/&nbsp;/g, " ") 
    .replace(/<\/p>/g, "\n") 
    .replace(/<[^>]*>?/gm, "") 
    .split("\n")
    .map(line => line.trim())
    .filter(line => line)
    .join("\n");
}

