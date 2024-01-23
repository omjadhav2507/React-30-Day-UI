

import './App.css'

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const App = () => {
  const [filePreviews, setFilePreviews] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {

    console.log(acceptedFiles);


const newFilePreviews = acceptedFiles
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

  setFilePreviews((prevFilePreviews) => [
      ...prevFilePreviews,
      ...newFilePreviews,
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*", 
    multiple: true, 
  });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "4px",
          padding: "20px",
          backgroundColor: isDragActive ? "#f4f4f4" : "white",
          color:'black',
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p style={{ margin: "0" }}>
          Drag & drop files here, or click to select files
        </p>
      </div>

      {filePreviews.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4 style={{ marginBottom: "10px" }}>File Previews:</h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {filePreviews.map((preview, index) => (
              <div
                key={index}
                style={{
                  marginRight: "10px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                <img
                  src={preview.preview}
                  alt={`Preview ${index + 1}`}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginBottom: "5px",
                  }}
                />
                <p style={{ margin: "0" }}>{preview.file.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

