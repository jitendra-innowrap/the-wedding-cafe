import Link from "next/link";
import React, { useState, useEffect } from "react";

// Helper function to detect if the device is iOS
const isIOSDevice = () => {
  return (
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream
  );
};

const CustomLink = ({ href, query, children, as, ...props }) => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if the device is iOS and set the state
    if (typeof window !== "undefined") {
      setIsIOS(isIOSDevice());
    }
  }, []);

  // Construct the full URL for the `a` tag with query params
  const generateHrefWithQuery = (href, query) => {
    // Avoid using window in server-side rendering
    if (typeof window === "undefined") return href;

    const url = new URL(href, window.location.origin);
    if (query) {
      Object.keys(query).forEach((key) => {
        url.searchParams.append(key, query[key]);
      });
    }
    return url.toString();
  };

  // Only generate href when in the browser (iOS case)
  const fullHref = isIOS ? generateHrefWithQuery(href, query) : href;

  if (isIOS) {
    // Render an 'a' tag for iOS devices with query parameters
    return (
      <a href={fullHref} {...props}>
        {children}
      </a>
    );
  }

  // Render 'Link' component for non-iOS devices
  return (
    <Link
      href={{
        pathname: href,
        query: query,
      }}
      as={as}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
