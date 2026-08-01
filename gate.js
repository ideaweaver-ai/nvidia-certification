(function () {
  var CODE_HASH = "538e0c6d68d7527b36c0f9359fa383d3a694688dd072a2d9bfad71a7e4337ed5";
  var STORAGE_KEY = "iwCertGateUnlocked";

  function unlock() {
    document.body.classList.remove("gated");
  }

  if (localStorage.getItem(STORAGE_KEY) === "1") {
    unlock();
  }

  async function sha256Hex(text) {
    var enc = new TextEncoder().encode(text);
    var buf = await crypto.subtle.digest("SHA-256", enc);
    return Array.from(new Uint8Array(buf)).map(function (b) {
      return b.toString(16).padStart(2, "0");
    }).join("");
  }

  var form = document.getElementById("gateForm");
  var input = document.getElementById("gateInput");
  var error = document.getElementById("gateError");

  function showError(msg) {
    error.textContent = msg;
    error.classList.remove("hidden");
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var code = input.value.trim();

    if (!/^\d{10}$/.test(code)) {
      showError("Enter the full 10-digit access code.");
      return;
    }

    try {
      var hash = await sha256Hex(code);
      if (hash === CODE_HASH) {
        localStorage.setItem(STORAGE_KEY, "1");
        error.classList.add("hidden");
        unlock();
      } else {
        showError("Incorrect code. Please try again.");
        input.value = "";
        input.focus();
      }
    } catch (err) {
      showError("Unable to verify the code in this browser. Please try a different browser.");
    }
  });
})();
