// Source: https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component

import { useEffect, useState } from "react";

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      // Image is a URL
      if (fileName.startsWith("http")) {
        try {
          const response = fileName;
          setImage(response);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
      // Image is local
      else {
        try {
          const response = await import(`../assets/images/${fileName}`);
          setImage(response.default);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
