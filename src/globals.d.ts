// globals.d.ts
declare module '*.css' {
  const content: string;
  export default content;
}

// Optional: better types for CSS Modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}