import React from 'react';

const MDXComponents = {
  h1: (props) => <h1 className="text-green-700" {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  h5: (props) => <h5 {...props} />,
  h6: (props) => <h6 {...props} />,
  // inlineCode: (props) => (
  //   <Code colorScheme="yellow" fontSize="0.84em" {...props} />
  // ),
  br: (props) => <br {...props} />,
  // hr: Hr,
  // a: CustomLink,
  p: (props) => <p {...props} />,
  ul: (props) => <ul className="pl-4" {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li className="list-disc" {...props} />,
  // blockquote: Quote,
};

export default MDXComponents;
