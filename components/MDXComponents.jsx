import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';

function MDXImage(props) {
  const { alt, imgid } = props;

  const standardUrl = buildUrl(imgid, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
    },
  });
  const urlBlurred = buildUrl(imgid, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
    },
    transformations: {
      effect: 'blur:1000',
      quality: 1,
    },
  });

  return (
    <div className="mb-8">
      <Image
        alt={alt}
        priority="true"
        placeholder="blur"
        blurDataURL={urlBlurred}
        src={standardUrl}
        {...props}
      />
    </div>
  );
}

function InlineLink(props) {
  const { href, text } = props;
  return (
    <Link href={href} passHref>
      <a className="underline" target="_blank">{text}</a>
    </Link>
  );
}

const MDXComponents = {
  h1: (props) => <h1 className="text-green-700" {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  h5: (props) => <h5 {...props} />,
  h6: (props) => <h6 {...props} />,
  br: (props) => <br {...props} />,
  // hr: Hr,

  p: (props) => <p {...props} />,
  ul: (props) => <ul className="pl-4" {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li className="list-disc" {...props} />,
  // blockquote: Quote,
  MDXImage,
  InlineLink,
};

export default MDXComponents;
