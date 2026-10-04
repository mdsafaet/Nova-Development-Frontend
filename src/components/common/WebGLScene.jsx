import { useEffect, useRef } from "react";
// Optional canvas host. Pass setup(gl, canvas) and return a cleanup function.
// The supplied project did not contain a WebGL scene; this is not mounted by default.
export default function WebGLScene({ setup, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!setup) return;
    const gl = ref.current.getContext("webgl");
    if (!gl) return;
    const cleanup = setup(gl, ref.current);
    return () => { if (typeof cleanup === "function") cleanup(); };
  }, [setup]);
  return <canvas ref={ref} aria-hidden="true" {...props} />;
}
