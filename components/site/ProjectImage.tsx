"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";
export default function ProjectImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className="image-fallback" role="img" aria-label={props.alt}>
        <span>{props.alt}</span>
        <small>
          The visual is unavailable. You can still explore the project below.
        </small>
      </div>
    );
  return <Image {...props} alt={props.alt} onError={() => setFailed(true)} />;
}
