import React from "react";

export default function Container({ children, className }) {
  return (
    <section className={className} style={{ padding: "6rem 0"}}>
      <div style={{width: "80%", margin: "auto"}}>{children}</div>
    </section>
  );
}
