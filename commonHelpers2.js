import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),a="feedback-form-state",n=JSON.parse(localStorage.getItem(a))||{};e.elements.message.value=n.message||"";e.elements.email.value=n.email||"";function o(){const t={message:e.elements.message.value.trim(),email:e.elements.email.value.trim()};localStorage.setItem(a,JSON.stringify(t))}function i(t){t.preventDefault();const s=e.elements.message.value.trim(),m=e.elements.email.value.trim();function l(r){return r.trim()!==""}if(!l(s)||!l(m)){alert("Будь ласка, заповніть всі поля перед відправленням форми.");return}console.log({Email:m,Message:s}),localStorage.removeItem(a),e.reset()}e.addEventListener("input",o);e.addEventListener("submit",i);
//# sourceMappingURL=commonHelpers2.js.map
