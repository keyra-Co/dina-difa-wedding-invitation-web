const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function submitRSVP({ nama, hadir, jumlah }) {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama, hadir, jumlah }),
  });

  if (!response.ok) throw new Error("Submit failed");
  return response.json();
}
