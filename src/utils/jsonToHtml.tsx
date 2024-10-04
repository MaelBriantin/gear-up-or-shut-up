type JsonElement = {
  htmlTag: string;
  content?: string;
  className?: string;
  children?: { [key: string]: JsonElement };
}

export const jsonToHtml = (json: { [key: string]: JsonElement }, title: string | null = null) => {
    return Object.keys(json).map(key => {
      const { content, htmlTag, className, children } = json[key];
      const computedClassName = className ? className : title ? `${title}-${key}` : '';
      const Tag = htmlTag as keyof JSX.IntrinsicElements;
      return (
        <Tag key={key} className={computedClassName}>
          {content}
          {children && jsonToHtml(children, key)}
        </Tag>
      );
    });
};
