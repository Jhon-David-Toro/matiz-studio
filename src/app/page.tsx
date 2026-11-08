import { Suspense } from "react";

import { Editor } from "@/components/sections/Editor";

/**
 * The generator. Suspense is required because the editor reads the system from the address.
 *
 * @returns The rendered element.
 */
export default function HomePage() {
  return (
    <Suspense>
      <Editor />
    </Suspense>
  );
}
