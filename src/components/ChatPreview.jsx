import React from "react";

function ChatPreview({ chat }) {
  return (
    <div className="p-2 bg-gray rounded-lg cursor-pointer hover:bg-[#32495f]">
      <div className="flex gap-4">
        <img src={`https://ui-avatars.com/api/?name=${chat.creator.name}`} alt="" className="w-12 h-12 rounded-full mb-2" />
        <div>
          <p className="font-bold dark:text-white">
            {chat.creator.name ||
              chat.creator.phone ||
              "Unknown"}
          </p>
          <p className="text-gray-400 line-clamp-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
