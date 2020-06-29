import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./App.css";
import "./sigCanvas.css";

function App() {
  const [imageURL, setImageURL] = useState(null);

  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () =>
    {
      setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
      console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    }

  return (
    <div className="App">
      <h1>Signature Pad</h1>
      <Popup
        modal
        trigger={<button className="btn">Open Signature Pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }}
            />
            <button className="btn btn-main" onClick={save}>Save Signture</button>
            <button className="btn btn-main" onClick={clear}>Clear</button>
            <button className="btn btn-main" onClick={close}>Close</button>
          </>
        )}
      </Popup>
      <br />
      <br />
      {imageURL ? (
        <img
          src={imageURL}
          alt="my signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "150px"
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
