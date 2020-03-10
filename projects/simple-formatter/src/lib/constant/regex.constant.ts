export const Regex =  {
  textTransform : {
    boldRegex : /\@(.*?)\@/gi,
    italicRegex : /\%(.*?)\%/gi,
    linkRegex : /\{(.*?)\}|\[(.*?)\]|<u>(.*?)<\/u>|<span (.*?)>(.*?)<\/span>/gi,
    linkTextSymbolRegex : /\{(.*?)\}/gi,
    linkTextTagRegex : /<u>(.*?)<\/u>/gi,
    linkDescRegex : /\[(.*?)\]|<span (.*?)>(.*?)<\/span>/gi
  },
  searchRegex: {
    specialCharacters: /[@+$+%]|<[^>]*>/g,
    removeMultipleSpaces: /  +/g
  },
  reverseTransform : {
    boldRegex : /<b>(.*?)<\/b>|<b (.*?)>(.*?)<\/b>|<span style="font-weight: bolder;">(.*?)<\/span>/gi,
    italicRegex : /<i>(.*?)<\/i>|<i (.*?)>(.*?)<\/i>/gi,
    underlineRegex : /<u>(.*?)<\/u>|<u (.*?)>(.*?)<\/u>/gi,
    extraTagsRegex : /<[^>]*>/gi,
    spaceRegex : /&nbsp;/gi,
  },
};
