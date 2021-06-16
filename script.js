const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    code[(indexedDB.value = "")];
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.kay === "Bacspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
