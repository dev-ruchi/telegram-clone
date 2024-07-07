import React from "react";
import MarkdownIt from "markdown-it";
import markdownItSup from "markdown-it-sup";
import he from "he";

function Message({ message }) {
  const md = new MarkdownIt();
  md.use(markdownItSup);

  // Render the message using markdown-it
  let html = md.render(message.message);
  html = he.decode(html)

  return (
    <div key={message.id} className="mb-2">
      <div className="max-w-xs break-words p-2 rounded-lg bg-white dark:text-gray-900">
        <p className="text-sm font-bold mb-1 text-red-400">
          {message.sender.name}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

export default Message;
