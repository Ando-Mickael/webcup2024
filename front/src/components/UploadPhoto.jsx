import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { apiUrl } from "../libs/api";

export default function UploadPhoto() {
  async function handleSubmit(event) {
    event.preventDefault();

    const photo = event.target.photo.files[0];
    const label = event.target.label.value;

    if (!photo) return;

    const photoRef = ref(storage, `photos/${Date.now()}-${photo.name}`);

    uploadBytes(photoRef, photo).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        fetch(`${apiUrl}/photo/upload`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url, label }),
        });
      });
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="photo" />
      <input type="text" name="label" />
      <button type="submit">Upload</button>
    </form>
  );
}
