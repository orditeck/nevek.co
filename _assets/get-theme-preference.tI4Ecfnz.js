const e=()=>typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme")||"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";export{e as g};
