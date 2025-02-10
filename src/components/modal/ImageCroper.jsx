// import "react-image-crop/dist/ReactCrop.css";
// import { useState, useRef, useEffect } from "react";
// import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";

// const TO_RADIANS = Math.PI / 180;

// export async function canvasPreview(
//   image,
//   canvas,
//   crop,
//   scale = 1,
//   rotate = 0
// ) {
//   const ctx = canvas.getContext("2d");
//   if (!ctx) throw new Error("No 2d context");

//   const scaleX = image.naturalWidth / image.width;
//   const scaleY = image.naturalHeight / image.height;
//   const pixelRatio = window.devicePixelRatio;

//   canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
//   canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

//   ctx.scale(pixelRatio, pixelRatio);
//   ctx.imageSmoothingQuality = "high";

//   const cropX = crop.x * scaleX;
//   const cropY = crop.y * scaleY;

//   const rotateRads = rotate * TO_RADIANS;
//   const centerX = image.naturalWidth / 2;
//   const centerY = image.naturalHeight / 2;

//   ctx.save();
//   ctx.translate(-cropX, -cropY);
//   ctx.translate(centerX, centerY);
//   ctx.rotate(rotateRads);
//   ctx.scale(scale, scale);
//   ctx.translate(-centerX, -centerY);

//   ctx.drawImage(
//     image,
//     0,
//     0,
//     image.naturalWidth,
//     image.naturalHeight,
//     0,
//     0,
//     image.naturalWidth,
//     image.naturalHeight
//   );

//   ctx.restore();
// }

// function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
//   return centerCrop(
//     makeAspectCrop({ unit: "%", width: 90 }, aspect, mediaWidth, mediaHeight),
//     mediaWidth,
//     mediaHeight
//   );
// }

// const ImageCropModal = ({ isOpen, onClose, existingImage }) => {
//   const imgRef = useRef(null);
//   const previewCanvasRef = useRef(null);

//   const [crop, setCrop] = useState();
//   const [scale, setScale] = useState(1);
//   const [rotate, setRotate] = useState(0);
//   const [imgSrc, setImgSrc] = useState(existingImage || "");
//   const [aspect, setAspect] = useState();
//   const [completedCrop, setCompletedCrop] = useState();

//   function onSelectFile(e) {
//     if (e.target.files?.length > 0) {
//       setCrop(undefined);
//       const reader = new FileReader();
//       reader.onload = () => setImgSrc(reader.result?.toString() || "");
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   }

//   function onImageLoad(e) {
//     const { width, height } = e.currentTarget;
//     setCrop(centerAspectCrop(width, height, aspect));
//   }

//   return (
//     <div
//       className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
//         isOpen ? "block" : "hidden"
//       }`}
//     >
//       <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-lg">
//         <h2 className="text-xl font-semibold text-center mb-4">Crop Image</h2>

//         {!imgSrc && (
//           <div className="mb-4">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={onSelectFile}
//               className="w-full px-3 py-2 border rounded-md"
//             />
//           </div>
//         )}

//         {!!imgSrc && (
//           <div className="flex flex-col items-center">
//             <ReactCrop
//               crop={crop}
//               onChange={(_, percentCrop) => setCrop(percentCrop)}
//               onComplete={(c) => setCompletedCrop(c)}
//               //   aspect={aspect}
//             >
//               <img
//                 ref={imgRef}
//                 alt="Crop me"
//                 src={imgSrc}
//                 style={{
//                   transform: `scale(${scale}) rotate(${rotate}deg)`,
//                   maxWidth: "500px", // Fixed max width
//                   maxHeight: "300px", // Fixed max height to prevent long images
//                   width: "auto",
//                   height: "auto",
//                   objectFit: "contain",
//                 }}
//                 onLoad={onImageLoad}
//               />
//             </ReactCrop>

//             <div className="mt-4 w-full">
//               <label className="block">Zoom: </label>
//               <input
//                 type="range"
//                 min="1"
//                 max="3"
//                 step="0.1"
//                 value={scale}
//                 onChange={(e) => setScale(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>

//             <div className="mt-4 w-full">
//               <label className="block">Rotate: </label>
//               <input
//                 type="number"
//                 min="-180"
//                 max="180"
//                 value={rotate}
//                 onChange={(e) => setRotate(Number(e.target.value))}
//                 className="w-full"
//               />
//             </div>

//             {!!completedCrop && (
//               <div className="mt-4 flex justify-between w-full">
//                 <button
//                   onClick={onClose}
//                   className="px-4 py-2 bg-gray-400 text-white rounded-lg"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => alert("Crop & Save functionality here")}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//                 >
//                   Crop & Save
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageCropModal;

import "react-image-crop/dist/ReactCrop.css";
import { useState, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";

const TO_RADIANS = Math.PI / 180;

async function canvasPreview(image, canvas, crop, scale = 1, rotate = 0) {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No 2d context");

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const pixelRatio = window.devicePixelRatio;

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = "high";

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const rotateRads = rotate * TO_RADIANS;
  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();
  ctx.translate(-cropX, -cropY);
  ctx.translate(centerX, centerY);
  ctx.rotate(rotateRads);
  ctx.scale(scale, scale);
  ctx.translate(-centerX, -centerY);

  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  ctx.restore();
}

const ImageCropModal = ({ isOpen, onClose, existingImage }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const downloadAnchorRef = useRef(null);

  const [crop, setCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [imgSrc, setImgSrc] = useState(existingImage || "");
  const [completedCrop, setCompletedCrop] = useState();

  function onSelectFile(e) {
    if (e.target.files?.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.onload = () => setImgSrc(reader.result?.toString() || "");
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e) {
    setCrop(undefined);
  }

  async function onDownloadCropClick() {
    if (!completedCrop || !imgRef.current || !previewCanvasRef.current) return;

    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) throw new Error("No 2d context");

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );

    const blob = await offscreen.convertToBlob({ type: "image/png" });

    URL.revokeObjectURL(downloadAnchorRef.current.href);
    const blobUrl = URL.createObjectURL(blob);
    downloadAnchorRef.current.href = blobUrl;
    downloadAnchorRef.current.download = "cropped-image.png";
    downloadAnchorRef.current.click();
  }

  useEffect(() => {
    if (
      completedCrop?.width &&
      completedCrop?.height &&
      imgRef.current &&
      previewCanvasRef.current
    ) {
      canvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        completedCrop,
        scale,
        rotate
      );
    }
  }, [completedCrop, scale, rotate]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Crop Image</h2>

        {!imgSrc && (
          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        )}

        {!!imgSrc && (
          <div className="flex flex-col items-center">
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={undefined}
              minWidth={50}
              minHeight={50}
            >
              {/* <img
                ref={imgRef}
                alt="Crop me"
                src={imgSrc}
                style={{
                  transform: `scale(${scale}) rotate(${rotate}deg)`,
                  maxWidth: "500px",
                  maxHeight: "300px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                onLoad={onImageLoad}
              /> */}
              <img
                ref={imgRef}
                alt="Crop me"
                src={imgSrc}
                crossOrigin="anonymous" // Prevents tainting
                style={{
                  transform: `scale(${scale}) rotate(${rotate}deg)`,
                  maxWidth: "500px",
                  maxHeight: "300px",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                onLoad={onImageLoad}
              />
            </ReactCrop>

            <div className="mt-4 w-full ">
              <label className="block">Zoom: </label>
              <div className="w-full flex items-center">
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => setScale((prev) => Math.max(1, prev - 0.1))}
                >
                  -
                </button>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="mx-2 w-full"
                />
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => setScale((prev) => Math.min(3, prev + 0.1))}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 w-full">
              <label className="block">Rotate: </label>
              <div className=" w-full flex items-center">
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => setRotate((prev) => Math.max(-180, prev - 5))}
                >
                  -
                </button>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="5"
                  value={rotate}
                  onChange={(e) => setRotate(Number(e.target.value))}
                  className="mx-2 w-full"
                />
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => setRotate((prev) => Math.min(180, prev + 5))}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-between w-full">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={onDownloadCropClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Save & Crop
              </button>
            </div>

            <canvas ref={previewCanvasRef} style={{ display: "none" }} />
          </div>
        )}
      </div>

      <a ref={downloadAnchorRef} style={{ display: "none" }} />
    </div>
  );
};

export default ImageCropModal;
