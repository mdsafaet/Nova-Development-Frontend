// Chatbase AI chatbot embed (same snippet as the original site).
export function loadChatbase() {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) window.chatbase.q = [];
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      },
    });
  }
  const id = "G6WHSjPqEe6fFZN2QohSe";
  if (document.getElementById(id)) return;
  const add = () => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = id;
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  };
  if (document.readyState === "complete") add();
  else window.addEventListener("load", add, { once: true });
}
