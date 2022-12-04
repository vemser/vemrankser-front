import { Dispatch, FunctionComponent, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const DropzoneComponent: FunctionComponent<{ setFile: Dispatch<any> }> = ({setFile}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        'image/*': ['.png', '.jpeg', '.jpg']
      }
    });

  return (
    <div className='w-full p-4'>
      <div {...getRootProps()} className='w-full h-80 rounded-md cursor-pointer focus:outline-none'>
        <input {...getInputProps()} />
        <div>
          className={
            'flex flex-col items-center justify-center h-full space-y-3 border-2 border-dashed border-yellow-light rounded-x1' +
            (isDragReject === true ? 'border-red-500' : '') +
            (isDragAccept === true ? 'border-green-500' : '')
          }
        </div>
        {isDragReject ? (
          <p>Formato inválido, envie apenas imagens em png, jpg ou jpeg</p>
        ) : (
          <>
            <p>Drag & Drop Files Here</p>
            <p className='mt-2 text-base text-gray-300'>
                Formatos suportados: jpeg, jpg e png
            </p>
          </>
        )}
      </div>
    </div>
  )
}
