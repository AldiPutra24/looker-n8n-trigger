const WEBHOOK_URL =
  "https://itferaco.duckdns.org/webhook/scan-duplicates?trigger=refresh_looker";

dscc.subscribeToData(() => {
  const btn = document.getElementById("runBtn");
  const status = document.getElementById("status");

  btn.onclick = () => {
    status.innerText = "⏳ Processing...";

    fetch(WEBHOOK_URL, {
      method: "GET",
      mode: "no-cors"
    });

    setTimeout(() => {
      status.innerText = "✅ Trigger sent";
    }, 800);
  };
});