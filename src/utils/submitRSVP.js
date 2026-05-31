const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function submitRSVP({ nama, hadir, jumlah }) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama, hadir, jumlah }),
  });
  // Langsung return success tanpa cek response
  return { status: "success" };
}
