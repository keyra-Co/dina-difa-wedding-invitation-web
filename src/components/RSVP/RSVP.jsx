import "./RSVP.css";
import { useState } from "react";
import { submitRSVP } from "../../utils/submitRSVP";

function Toast({ message, type, onClose }) {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="toast-close" onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default function RSVP() {
  const [nama, setNama] = useState("");
  const [hadir, setHadir] = useState(null);
  const [jumlah, setJumlah] = useState(1);
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async () => {
    if (!nama) {
      showToast("Isi nama dulu ya!", "error");
      return;
    }
    if (hadir === null) {
      showToast("Konfirmasi kehadiran dulu ya!", "error");
      return;
    }
    if (hadir === true && (!jumlah || jumlah < 1)) {
      showToast("Isi jumlah tamu yang hadir ya!", "error");
      return;
    }
    setLoading(true);
    try {
      await submitRSVP({ nama, hadir, jumlah: hadir ? jumlah : 0, pesan });
      showToast("Terima kasih! Kami tunggu kehadiranmu 🌸", "success");
      setNama("");
      setHadir(null);
      setJumlah(1);
      setPesan("");
    } catch (err) {
      showToast("Gagal mengirim, coba lagi ya!", "error");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = hadir === false || hadir === null;

  return (
    <div className="rsvp-container">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <img
        src="/assets/images/rsvp/butterfly-green.png"
        alt=""
        className="rsvp-butterfly"
      />

      <div className="rsvp-frame-group">
        <img
          src="/assets/images/rsvp/frame-cream-rectangle-lace.png"
          alt=""
          className="rsvp-frame"
        />

        <img
          src="/assets/images/rsvp/flower-orchid-white-stem.png"
          alt=""
          className="rsvp-flower"
        />

        <div className="rsvp-content">
          <h2 className="rsvp-title">RSVP</h2>

          <div className="rsvp-field">
            <label className="rsvp-label">Nama Tamu</label>
            <input
              type="text"
              className="rsvp-input"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div className="rsvp-field">
            <label className="rsvp-label">Apakah bisa hadir?</label>
            <div className="rsvp-options">
              <button
                className={`rsvp-option ${hadir === true ? "rsvp-option-active" : ""}`}
                onClick={() => {
                  setHadir(true);
                  setJumlah(1);
                }}
              >
                Bisa dong!
              </button>
              <button
                className={`rsvp-option ${hadir === false ? "rsvp-option-active" : ""}`}
                onClick={() => {
                  setHadir(false);
                  setJumlah(0);
                }}
              >
                Maaf banget gak bisa :(
              </button>
            </div>
          </div>

          <div
            className={`rsvp-field ${isDisabled ? "rsvp-field-disabled" : ""}`}
          >
            <label className="rsvp-label">Jumlah yang hadir</label>
            <input
              type="number"
              className={`rsvp-input ${isDisabled ? "rsvp-input-disabled" : ""}`}
              min="1"
              value={isDisabled ? "" : jumlah}
              disabled={isDisabled}
              onChange={(e) => setJumlah(e.target.value)}
            />
          </div>

          <div
            className={`rsvp-field ${isDisabled ? "rsvp-field-disabled" : ""}`}
          >
            <label className="rsvp-label">Ucapan & doa</label>
            <textarea
              className={`rsvp-input rsvp-textarea ${isDisabled ? "rsvp-input-disabled" : ""}`}
              value={isDisabled ? "" : pesan}
              disabled={isDisabled}
              placeholder={isDisabled ? "" : "Tulis pesanmu disini..."}
              onChange={(e) => setPesan(e.target.value)}
            />
          </div>

          <button
            className="rsvp-submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Mengirim..." : "RSVP now"}
          </button>
        </div>
      </div>
    </div>
  );
}
