import React from 'react';
import NextLink from 'next/link';

function CustomLink(props) {
  const { href, id, children } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <a {...props}>foobar</a>
      </NextLink>
    );
  }

  return <a {...props}>foobar</a>;
}

function Quote(props) {
  return (
    <div className="bg-red">
      {props}
    </div>
  );
}

function DocsHeading(props) {
  const { href, id, children } = props;
  return (
    <h1 {...props}>
      <div>
        {children}
        {id && (
        <a href={`#${id}`}>#</a>
        )}
      </div>
    </h1>
  );
}

function Hr() {
  return <div className="border-b-2 border-black h-10" />;
}

const mdxComponents = {
  h1: (props) => <h1 className="font-bold mb-10" {...props} />,
  h2: (props) => <h2 className="font-bold mb-8" {...props} />,
  h3: (props) => <h3 className="font-bold mb-6" {...props} />,
  h4: (props) => <h4 className="font-bold" {...props} />,
  h5: (props) => <h5 className="font-bold" {...props} />,
  h6: (props) => <h6 className="font-bold" {...props} />,
  inlineCode: (props) => (
    <p className="font-italic" {...props} />
  ),
  br: (props) => <div className="h-10" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li {...props} />,
  blockquote: Quote,
};

export { CustomLink };

export default mdxComponents;
