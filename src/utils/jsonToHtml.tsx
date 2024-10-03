type JsonElement = {
  htmlTag: string;
  content?: string;
  className?: string;
  children?: JsonElement[] | { [key: string]: JsonElement };
}

export const jsonToHtml = (json: { [key: string]: JsonElement } | JsonElement[], title: string | null = null) => {
  if (Array.isArray(json)) {
    return json.map((element, index) => {
      const { content, htmlTag, className, children } = element;
      const computedClassName = className ? className : title ? `${title}-${index}` : '';
      const Tag = htmlTag as keyof JSX.IntrinsicElements;
      return (
        <Tag key={index} className={computedClassName}>
          {content}
          {children && jsonToHtml(children as JsonElement[])}
        </Tag>
      );
    });
  } else {
    return Object.keys(json).map(key => {
      const { content, htmlTag, className, children } = json[key];
      const computedClassName = className ? className : title ? `${title}-${key}` : '';
      const Tag = htmlTag as keyof JSX.IntrinsicElements;
      return (
        <Tag key={key} className={computedClassName}>
          {content}
          {children && jsonToHtml(children as JsonElement[])}
        </Tag>
      );
    });
  }
};
