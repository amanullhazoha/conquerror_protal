import React from 'react';

const EditButtons = ({isEdit, setIsEdit}) => {
    return (
        <>
         {isEdit ? (
            <div className="flex flex-col 2xl:flex-row gap-y-2 items-center gap-x-4">
              <button
                onClick={() => setIsEdit(false)}
                className="border-[1px] border-gray-200 text-gray-900 p-[8px_12px] rounded-[32px] font-medium text-[12px]"
              >
                Undo changes
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className="border-[1px] border-primary-700 text-primary-700 p-[8px_12px] rounded-[32px] font-medium text-[12px]"
              >
                Submit
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="border-[1px] border-gray-200 text-gray-900 p-[8px_12px] rounded-[32px] font-medium text-[12px]"
            >
              Edit
            </button>
          )}   
        </>
    );
};

export default EditButtons;