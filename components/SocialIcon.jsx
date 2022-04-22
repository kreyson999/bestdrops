import React from "react";
import Image from "next/image";

function SocialIcon({ url, icon, alt }) {
  return (
    <a href={url} className="grid w-8 h-8">
      <Image
        src={icon}
        width={36}
        height={36}
        className="object-cover"
        alt={alt}
      />
    </a>
  );
}

export default SocialIcon;
